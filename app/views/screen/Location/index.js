import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import Card from '../../component/Card'

import { getNearbyLocations, bookmarkLocation, getBookmarkLocation } from '../../../action/LocationAction';

Geolocation.setRNConfiguration({
    enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
});

const styles = StyleSheet.create({
    rootLayout: {
        flex: 1,
        flexDirection: 'column'
    },
    mapLayout: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    contentLayout: {
        height: 150,
        position: 'absolute',
        marginLeft: 5,
        marginRight: 5,
        bottom: 0
    }
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
        this.props.getBookmarkLocation()
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
        // let { nearby_location } = this.props
        let {bookmark_location, nearby_location} = this.props

        let bookmarkedID = bookmark_location.map(list => list.id);
        // console.log(bookmarkedID)
        
        // let nearby_location = [{ "formatted_address": "488 Park, Orchards Rd, Park Orchards VIC 3114, Australia", "geometry": { "location": { "lat": -37.78191229999999, "lng": 145.2108323 }, "viewport": { "northeast": { "lat": -37.78070367010728, "lng": 145.2120454798927 }, "southwest": { "lat": -37.78340332989272, "lng": 145.2093458201073 } } }, "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png", "id": "1d8a1846c78dde2728469a4a9a252e220b604760", "name": "Snake Busters", "opening_hours": { "open_now": true }, "photos": [{ "height": 1188, "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104445551094489637470\">Snake Busters</a>"], "photo_reference": "CmRZAAAAQL2uCAA294mWxtdKAIWTyimxwk0d5Ts2fYchb1kx-LuxJrA7zYrbaOZN0Y6e-jXPRM85p8TUTX3MdT4Ct_4FEdY1U5Y3uUFlk0kQqhchqtmimrLiPUXIiI_qewnDYMZEEhD66GG5pOWIEjVJYl_LH1udGhSfA7VKplOUfaBi5--iipjT7xx_Cg", "width": 1440 }], "place_id": "ChIJUZwQs_A51moRAa0OPFnEWAk", "plus_code": { "compound_code": "6696+68 Park Orchards, Victoria", "global_code": "4RJ76696+68" }, "rating": 0, "reference": "ChIJUZwQs_A51moRAa0OPFnEWAk", "types": ["home_goods_store", "point_of_interest", "store", "establishment"], "user_ratings_total": 0 }, { "formatted_address": "488 Park, Orchards Rd, Park Orchards VIC 3114, Australia", "geometry": { "location": { "lat": -37.78191229999999, "lng": 145.2108323 }, "viewport": { "northeast": { "lat": -37.78070367010728, "lng": 145.2120454798927 }, "southwest": { "lat": -37.78340332989272, "lng": 145.2093458201073 } } }, "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png", "id": "1d8a1846c78dde2728469a4a9a252e220b604760", "name": "Snake Busters", "opening_hours": { "open_now": true }, "photos": [{ "height": 1188, "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104445551094489637470\">Snake Busters</a>"], "photo_reference": "CmRZAAAAQL2uCAA294mWxtdKAIWTyimxwk0d5Ts2fYchb1kx-LuxJrA7zYrbaOZN0Y6e-jXPRM85p8TUTX3MdT4Ct_4FEdY1U5Y3uUFlk0kQqhchqtmimrLiPUXIiI_qewnDYMZEEhD66GG5pOWIEjVJYl_LH1udGhSfA7VKplOUfaBi5--iipjT7xx_Cg", "width": 1440 }], "place_id": "ChIJUZwQs_A51moRAa0OPFnEWAk", "plus_code": { "compound_code": "6696+68 Park Orchards, Victoria", "global_code": "4RJ76696+68" }, "rating": 0, "reference": "ChIJUZwQs_A51moRAa0OPFnEWAk", "types": ["home_goods_store", "point_of_interest", "store", "establishment"], "user_ratings_total": 0 }, { "formatted_address": "488 Park, Orchards Rd, Park Orchards VIC 3114, Australia", "geometry": { "location": { "lat": -37.78191229999999, "lng": 145.2108323 }, "viewport": { "northeast": { "lat": -37.78070367010728, "lng": 145.2120454798927 }, "southwest": { "lat": -37.78340332989272, "lng": 145.2093458201073 } } }, "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png", "id": "1d8a1846c78dde2728469a4a9a252e220b604760", "name": "Snake Busters", "opening_hours": { "open_now": true }, "photos": [{ "height": 1188, "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104445551094489637470\">Snake Busters</a>"], "photo_reference": "CmRZAAAAQL2uCAA294mWxtdKAIWTyimxwk0d5Ts2fYchb1kx-LuxJrA7zYrbaOZN0Y6e-jXPRM85p8TUTX3MdT4Ct_4FEdY1U5Y3uUFlk0kQqhchqtmimrLiPUXIiI_qewnDYMZEEhD66GG5pOWIEjVJYl_LH1udGhSfA7VKplOUfaBi5--iipjT7xx_Cg", "width": 1440 }], "place_id": "ChIJUZwQs_A51moRAa0OPFnEWAk", "plus_code": { "compound_code": "6696+68 Park Orchards, Victoria", "global_code": "4RJ76696+68" }, "rating": 0, "reference": "ChIJUZwQs_A51moRAa0OPFnEWAk", "types": ["home_goods_store", "point_of_interest", "store", "establishment"], "user_ratings_total": 0 }]

        return <View style={styles.rootLayout}>
            <View style={styles.mapLayout}>
                {locationReceived &&
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: Number(locations.latitude),
                            longitude: Number(locations.longitude),
                            latitudeDelta: 0.25,
                            longitudeDelta: 0.121,
                        }}>
                        <Marker
                            coordinate={locations}
                            title={"You are here"} />

                        <Circle
                            center={{ latitude: Number(locations.latitude), longitude: Number(locations.longitude) }}
                            radius={4000}
                            strokeWidth={1}
                            strokeColor={'#1a66ff'}
                            fillColor={'rgba(230,238,255,0.5)'} />
                    </MapView>}
            </View>
            <View style={styles.contentLayout}>
                {nearby_location.length != 0 ? <FlatList
                    data={nearby_location}
                    horizontal={true}
                    renderItem={({ item }) => <Card data={item} selectedCard={bookmarkedID} bookmarkCard={(data, index) => this.bookmarkCard(data, index)} />}
                    keyExtractor={item => item.id}
                /> : <View></View>}
            </View>

        </View>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getNearbyLocations,
    bookmarkLocation,
    getBookmarkLocation
}, dispatch)

const mapStateToProps = props => {
    let { location } = props
    return {
        nearby_location: location.nearby_location,
        bookmark_location: location.bookmark_location
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationComponent)