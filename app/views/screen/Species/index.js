import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadSpeciesList } from '../../../action/SpeciesAction'

import styles from './style'

const SpeciesList = ({ data }) => {
    let { item } = data
    return <View style={styles.CardView}>
        {/* <View style={styles.ImageView}>
        </View> */}

        <View style={styles.ContentView}>
            <Text style={styles.ContentText}>{item["Common Name"]}</Text>
            <Text>{item["Threatened status"]}</Text>
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

        if(searchText != ''){
            filteredSpecies = speciesList.filter(list => {
                if(list["Common Name"].indexOf(searchText) != -1){
                    return true
                }
            })
        }else{
            filteredSpecies = speciesList
        }

        return <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>

            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>Species</Text>
                    
                </View>

                <View>
                    <TextInput
                        onChangeText={text => this.changeSearch(text)}
                        style={{ height: 40, color: '#333', backgroundColor: '#e0e0e0', marginBottom: 20, padding: 5, borderRadius: 10 }}
                        placeholder="Search the species"
                        placeholderTextColor="#333" />

                    <FlatList
                        key={item => item["Listed SPRAT TaxonID"]}
                        data={filteredSpecies}
                        renderItem={item => <SpeciesList data={item} />} />
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