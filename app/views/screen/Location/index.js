import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
        locationReceived: false
    }

    componentDidMount = () => {
        let { offlineMode } = this.props

        if (!offlineMode) {
            this.props.getBookmarkLocation()
        }

        Geolocation.getCurrentPosition((position) => {
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

    bookmarkCard = (data, index) => {
        this.props.bookmarkLocation(data, index)
    }

    render() {
        let { locations, locationReceived } = this.state
        let { bookmark_location, nearby_location, showLocationDetails, location_details, offlineMode } = this.props

        let bookmarkedID = bookmark_location.map(list => list.id);
// console.log(location_details)
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
                                onPress={() => this.props.getLocationDetails(location)}
                                title={location.name}>
                                <Image source={require('../../../assets/images/service.png')} style={{ width: 40, height: 40 }} />
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

            {showLocationDetails && <View style={styles.contentLayout}>
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

                    <TouchableOpacity style={{marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => this.bookmarkCard(location_details, bookmarkedID.indexOf(location_details.id))}>
                        <Icon name="star" size={24} color={"#e0e0e0"} style={{marginRight: 10}} />
                        <Text>Bookmark this location</Text>
                    </TouchableOpacity>
                </View>

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
        offlineMode: location.authentication
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationComponent)