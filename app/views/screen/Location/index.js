import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import getDirections from 'react-native-google-maps-directions'
import Card from '../../component/Card'

import { getNearbyLocations, bookmarkLocation, getBookmarkLocation, getLocationDetails, closeDetails } from '../../../action/LocationAction';
import styles from './style'

Geolocation.setRNConfiguration({
    enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
});

class LocationComponent extends Component {
    state = {
        locations: {
            latitude: '',
            longitude: ''
        },
        selected_location: {
            latitude: '',
            longitude: ''
        },
        locationReceived: false
    }

    handleGetDirections = () => {
        let { locations, selected_location } = this.state
        const data = {
            source: locations,
            destination: selected_location,
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        }

        getDirections(data)
    }

    componentDidMount = () => {
        let { offlineMode } = this.props

        if (!offlineMode) {
            this.props.getBookmarkLocation()
        }

        Geolocation.getCurrentPosition((position) => {
            console.log("inside geolocation")
            this.props.getNearbyLocations({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            let { locations } = this.state
            locations.latitude = position.coords.latitude;
            locations.longitude = position.coords.longitude;
            this.setState({
                locations,
                locationReceived: true
            })
        }, (error) => {
            console.log(error)
        })
    };

    onLocationSelect = data => {
        let { selected_location } = this.state
        selected_location = {
            latitude: data.geometry.location.lat,
            longitude: data.geometry.location.lng
        }
        this.setState({
            selected_location
        })
        this.props.getLocationDetails(data)
    }

    bookmarkCard = (data, index) => {
        console.log(data)
        this.props.bookmarkLocation(data, index)
    }

    render() {
        let { locations, locationReceived } = this.state
        let { bookmark_location, is_loaded, nearby_location, showLocationDetails, location_details, offlineMode } = this.props

        let bookmarkedID = bookmark_location.map(list => list.name);

        console.log("bookmarkedID : ",bookmarkedID)

        return <View style={styles.rootLayout}>
            
            <View style={styles.mapLayout}>
                {locationReceived &&
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: Number(locations.latitude),
                            longitude: Number(locations.longitude),
                            latitudeDelta: 0.5,
                            longitudeDelta: 0.21,
                        }}>

                        <Marker
                            coordinate={locations}
                            title={"You are here"} />

                        {nearby_location.length != 0 && nearby_location.map(location => {
                            let loc_attr = {
                                latitude: location.geometry.location.lat,
                                longitude: location.geometry.location.lng
                            }

                            return <Marker
                                coordinate={loc_attr}
                                onPress={() => this.onLocationSelect(location)}
                                title={location.name}>
                                {/* <Image source={require('../../../assets/images/service.png')} style={{ width: 40, height: 40 }} /> */}
                            </Marker>

                        })}

                        <Circle
                            center={{ latitude: Number(locations.latitude), longitude: Number(locations.longitude) }}
                            radius={400}
                            strokeWidth={2}
                            strokeColor={'#1a66ff'}
                            fillColor={'rgba(230,238,255,0.5)'} />
                    </MapView>}
            </View>

            {(showLocationDetails && location_details) && <View style={styles.contentLayout}>
                <View style={styles.ContentContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={styles.locationTitle}>{location_details.name}</Text>
                        <TouchableOpacity style={styles.closeLayout} onPress={this.props.closeDetails}>
                            <Icon name="close" size={18} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.locationAddressText}>{location_details.formatted_address}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => Linking.openURL(`tel:${location_details.formatted_phone_number}`)}>
                            <Icon name="phone" size={24} />
                            <Text style={styles.phoneText}>{location_details.formatted_phone_number}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL(location_details.website)}>
                            <Icon name="web" size={28} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.bookmarkCard(location_details, bookmarkedID.indexOf(location_details.name))}>
                            <Icon name="star" size={24} color={bookmarkedID.indexOf(location_details.name) != -1 ? "#e0e" : "#e0e0e0"} style={{ marginRight: 10 }} />
                            <Text>Bookmark this location</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.handleGetDirections(location_details)}>
                            <Icon name="map-marker" size={24} color={"#e0e0e0"} style={{ marginRight: 10 }} />
                            <Text>Navigate to this location</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>}
            
            {!is_loaded && <View style={{ position: 'absolute', top: 30, height: 30, flex: 1, width:"100%", alignItems: 'center' }}>
                <Text style={{ color: '#fff', backgroundColor: '#3498db', padding: 5, borderRadius: 5 }}>Please wait while the app loads the nearby services.</Text>
            </View>}
        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getNearbyLocations,
    bookmarkLocation,
    getBookmarkLocation,
    getLocationDetails,
    closeDetails
}, dispatch)

const mapStateToProps = props => {
    let { location, authentication } = props
    return {
        nearby_location: location.nearby_location,
        bookmark_location: location.bookmark_location,
        showLocationDetails: location.showLocationDetails,
        location_details: location.location_details,
        offlineMode: authentication.offlineMode,
        is_loaded: location.is_loaded
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationComponent)