import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { Picker } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../../component/Header'
import ImageBG from '../../component/ImageBG'
import { loadSpeciesList } from '../../../action/SpeciesAction'

import BG from '../../../assets/images/bg.jpg';

import styles from './style'

const SpeciesList = ({ data, navigation }) => {
    let { item } = data

    let image_link = item.Image !== null ? item.Image : undefined;

    return <View style={styles.CardView}>
        <View style={styles.ImageView}>
            {image_link ? <Image source={{ uri: image_link }} style={{ flex: 1 }} /> : <View>
                <Text>Image is not available.</Text>
            </View>}
        </View>

        <View style={styles.ContentView}>
            <Text numberOfLines={1} style={styles.ContentText}>{item["Common Name"]}</Text>
            <Text style={{ color: '#333' }}>{item["Threatened status"]}</Text>
        </View>

        <View style={{ marginLeft: 'auto', width: 50, height: '100%' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Description', {
                    data: item
                })
            }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Icon name="arrow-forward" size={20} />

            </TouchableOpacity>
            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="arrow-forward" size={20} />
            </View> */}
        </View>

    </View>
}

class SpeciesScreen extends Component {
    state = {
        searchText: '',
        filterByCategory: '',
        filterByStatus: ''
    }
    componentDidMount = () => {
        this.props.loadSpeciesList()
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

    render() {
        let { searchText, filterByCategory, filterByStatus } = this.state
        let { speciesList } = this.props

        let filteredSpecies = []

        let speciesCategory = [];
        let threatenedStatus = [];

        speciesList.map(list => {
            if (threatenedStatus.indexOf(list["Threatened status"]) == -1) {
                threatenedStatus.push(list["Threatened status"])
            }
            if (speciesCategory.indexOf(list.Class) == -1) {
                speciesCategory.push(list.Class)
            }
        })

        filteredSpecies = speciesList.filter(list => {
            if (filterByCategory !== '' && list['Class'] != filterByCategory) {
                return false;
            }
            if (filterByStatus !== '' && list['Threatened status'] != filterByStatus) {
                return false;
            }
            if (list["Common Name"] !== null) {
                if (list["Common Name"].toLowerCase().indexOf(searchText.toLowerCase()) == -1) {
                    return false
                }
            }
            return true
        })

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={styles.container}>
                <Header title="Species" />

                <View>


                    <View style={{ width: '100%', marginBottom: 5 }}>
                        <TextInput
                            onChangeText={text => this.changeSearch(text)}
                            style={{ height: 40, color: '#333', backgroundColor: 'rgba(255,255,255, 0.8)', marginBottom: 5, padding: 10, borderRadius: 10 }}
                            placeholder="Search the species. Eg., Mouse"
                            placeholderTextColor="#333" />

                        <Text>Filter By:</Text>

                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12 }}>Category</Text>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select Category"
                                    style={{ width: 120, height: 30, fontSize: 12 }}
                                    placeholder="Select the Category"
                                    placeholderStyle={{ color: "#bfc6ea", fontSize: 12 }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={filterByCategory}
                                    onValueChange={value => this.saveFilter('filterByCategory', value)}
                                >
                                    {speciesCategory.map(list => <Picker.Item label={list} value={list} />)}
                                </Picker>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 12 }}>Threatened status</Text>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select the Threatened status"
                                    style={{ width: 120, height: 30, fontSize: 12 }}
                                    placeholder="Select the Threatened status"
                                    placeholderStyle={{ color: "#bfc6ea", fontSize: 12 }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={filterByStatus}
                                    onValueChange={value => this.saveFilter('filterByStatus', value)}
                                >
                                    {threatenedStatus.map(list => <Picker.Item label={list} value={list} />)}
                                </Picker>
                            </View>


                        </View>

                    </View>

                    <FlatList
                        key={item => item["Listed SPRAT TaxonID"]}
                        data={filteredSpecies}
                        renderItem={item => <SpeciesList data={item} navigation={this.props.navigation} />} />
                </View>
            </View>

        </SafeAreaView>
    }
}

const mapStateToProps = props => {
    let { species } = props
    return {
        speciesList: species.speciesList
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loadSpeciesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesScreen)