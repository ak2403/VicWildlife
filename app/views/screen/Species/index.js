import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
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
        searchText: ''
    }
    componentDidMount = () => {
        this.props.loadSpeciesList()
    }

    changeSearch = text => {
        this.setState({
            searchText: text
        })
    }

    render() {
        let { searchText } = this.state
        let { speciesList } = this.props

        let filteredSpecies = []

        if (searchText != '') {
            filteredSpecies = speciesList.filter(list => {
                if (list["Common Name"] !== null){
                    if (list["Common Name"].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
                        return true
                    }
                }
            })
        } else {
            filteredSpecies = speciesList
        }

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={styles.container}>
                <Header title="Species" />

                <View>
                    <TextInput
                        onChangeText={text => this.changeSearch(text)}
                        style={{ height: 40, color: '#333', backgroundColor: 'rgba(255,255,255, 0.8)', marginBottom: 20, padding: 5, borderRadius: 10 }}
                        placeholder="Search the species"
                        placeholderTextColor="#333" />

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