import React, { Component } from 'react'
import { View, Button, Text, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Picker } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Geolocation from '@react-native-community/geolocation';
import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { loadSpeciesList, bookmarkSpecies } from '../../../action/SpeciesAction'

import BG from '../../../assets/images/bg.jpg';

import styles from './style'

Geolocation.setRNConfiguration({
    enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
});

const SpeciesList = ({ data, navigation, theme, bookmarkFunc, bookmarkData }) => {
    let { item } = data

    let image_link = item.Image !== null ? item.Image : undefined;
    let bookmark_index = bookmarkData.indexOf(item["Listed_SPRAT_TaxonID"])

    return <View style={[styles.CardView, theme && { backgroundColor: 'rgba(35,35,39, 0.8)' }]}>
        <View style={styles.ImageView}>
            {image_link ? <Image source={{ uri: image_link }} style={{ flex: 1 }} /> : <View>
                <Text>Image is not available.</Text>
            </View>}
        </View>

        <View style={styles.ContentView}>
            <Text numberOfLines={1} style={[styles.ContentText, theme && { color: theme ? "#dfdde3" : "#333" }]}>{item["Common_Name"]}</Text>
            <Text style={{ color: theme ? "#dfdde3" : "#333" }}>{item["Threatened_Status"]}</Text>
        </View>

        <View style={{ marginLeft: 'auto', width: 50, height: '100%' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Description', {
                    data: item
                })
            }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Icon name="arrow-forward" size={24} color={theme ? "#dfdde3" : "#333"} />

            </TouchableOpacity>

            <TouchableOpacity onPress={() => bookmarkFunc(item, bookmark_index != -1 ? true : false, bookmark_index)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="star" color={bookmark_index != -1 ? "#e0e" : "#95a5a6"} size={24} />
                </View>
            </TouchableOpacity>
        </View>

    </View>
}

function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

function compare(a, b) {
    if (a.distance_from_user < b.distance_from_user) {
        return -1;
    }
    if (a.distance_from_user > b.distance_from_user) {
        return 1;
    }
    return 0;
}

class SpeciesScreen extends Component {
    state = {
        searchText: '',
        filterByCategory: '',
        filterByStatus: '',
        userLocation: {
            latitude: '',
            longitude: ''
        },
        locationReceived: false
    }
    componentDidMount = () => {
        this.props.loadSpeciesList()

        Geolocation.getCurrentPosition((position) => {
            let { userLocation } = this.state
            userLocation.latitude = position.coords.latitude;
            userLocation.longitude = position.coords.longitude;
            this.setState({
                userLocation,
                locationReceived: true
            })
        }, (error) => {
            console.log(error)
        })
    }

    changeSearch = text => {
        this.setState({
            searchText: text
        })
    }

    saveFilter = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    clearFilter = () => this.setState({
        filterByCategory: '',
        filterByStatus: ''
    })

    render() {
        let { searchText, filterByCategory, filterByStatus, userLocation } = this.state
        let { speciesList, darkTheme, bookmarked_species } = this.props

        let filteredSpecies = []
        let bookmarkID = bookmarked_species.map(list => list["Listed_SPRAT_TaxonID"])

        let speciesCategory = [];
        let threatenedStatus = [];

        speciesList.map(list => {
            if (threatenedStatus.indexOf(list["Threatened_Status"]) == -1) {
                threatenedStatus.push(list["Threatened_Status"])
            }
            if (speciesCategory.indexOf(list.Class) == -1) {
                speciesCategory.push(list.Class)
            }

            if (list.Longitude && list.Latitude) {
                list["distance_from_user"] = calcCrow(userLocation.latitude, userLocation.longitude, list.Latitude, list.Longitude)
            } else {
                list["distance_from_user"] = -1
            }

        })

        filteredSpecies = speciesList.filter(list => {
            if (filterByCategory !== '' && list['Class'] != filterByCategory) {
                return false;
            }
            if (filterByStatus !== '' && list['Threatened_Status'] != filterByStatus) {
                return false;
            }
            if (list["Common_Name"] !== null) {
                if (list["Common_Name"].toLowerCase().indexOf(searchText.toLowerCase()) == -1) {
                    return false
                }
            }
            return true
        })

        filteredSpecies = filteredSpecies.sort(compare);

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={styles.container}>
                <Header title="Species" />

                <View>


                    <View style={{ width: '100%', marginBottom: 10, backgroundColor: darkTheme ? 'rgba(35,35,39, 1)' : 'rgba(255,255,255, 0.8)', padding: 10, borderRadius: 5 }}>
                        <TextInput
                            onChangeText={text => this.changeSearch(text)}
                            style={{ height: 40, color: '#333', backgroundColor: 'rgba(255,255,255, 0.8)', marginBottom: 5, padding: 10, borderRadius: 10 }}
                            placeholder="Search the species. Eg., Mouse"
                            placeholderTextColor="#333" />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ color: darkTheme ? "#dfdde3" : "#333", fontFamily: 'Calibre-Bold', fontSize: 18 }}>Filter By:</Text>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Calibre', color: darkTheme ? "#dfdde3" : "#333" }}>Category</Text>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select Category"
                                    style={{ width: 100, height: 25, fontSize: 12, fontFamily: 'Calibre', backgroundColor: '#fff', color: '#333' }}
                                    placeholder="Select the Category"
                                    placeholderStyle={{ color: "#333", fontSize: 12, fontFamily: 'Calibre' }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={filterByCategory}
                                    onValueChange={value => this.saveFilter('filterByCategory', value)}
                                >
                                    {speciesCategory.map(list => <Picker.Item label={list} value={list} />)}
                                </Picker>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Calibre', color: darkTheme ? "#dfdde3" : "#333" }}>Threatened status</Text>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select the Threatened status"
                                    style={{ width: 100, height: 25, fontSize: 12, fontFamily: 'Calibre', backgroundColor: '#fff', color: '#333' }}
                                    placeholder="Select the Threatened status"
                                    placeholderStyle={{ color: "#333", fontSize: 12, fontFamily: 'Calibre' }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={filterByStatus}
                                    onValueChange={value => this.saveFilter('filterByStatus', value)}
                                >
                                    {threatenedStatus.map(list => <Picker.Item label={list} value={list} />)}
                                </Picker>
                            </View>
                        </View>

                        {(filterByCategory != '' || filterByStatus != '') &&
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity onPress={this.clearFilter} style={{ backgroundColor: '#ee5253', justifyContent: 'center', alignItems: 'center', height: 30, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5 }}>
                                    <Text style={{ color: '#fff', fontFamily: 'Calibre-Bold', fontSize: 16 }}>clear filter</Text>
                                </TouchableOpacity>
                            </View>}

                    </View>

                    <FlatList
                        key={item => item["Listed_SPRAT_TaxonID"]}
                        data={filteredSpecies}
                        renderItem={item => <SpeciesList theme={darkTheme} data={item} navigation={this.props.navigation} bookmarkFunc={(list, isPresent, index) => this.props.bookmarkSpecies(list, isPresent, index)} bookmarkData={bookmarkID} />}
                    />
                </View>
            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { species, authentication } = props
    return {
        speciesList: species.speciesList,
        darkTheme: authentication.darkTheme,
        bookmarked_species: species.bookmarked_species
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadSpeciesList,
    bookmarkSpecies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesScreen)