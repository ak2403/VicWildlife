import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Accordion } from "native-base";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getDonation } from '../../../action/DonationAction'

import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/quiz_bg.jpg';

import Styles from './style'

openLink = link => {
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
            Linking.openURL(link);
        } else {

        }
    });
};

class DonationScreen extends Component {

    componentDidMount = () => {
        this.props.getDonation()
    }

    _renderHeader(item, expanded) {
        return (
            <View style={Styles.headerLayer}>
                <Text style={{ color: "#fff", fontFamily: 'Calibre', fontSize: 16 }}>
                    {item["Donation Name"]}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} color="#fff" name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} color="#fff" name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <View style={Styles.contentLayer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Calibre-Bold' }}>Organisation: </Text>
                    <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Calibre' }}>{item["Donation Organization"]}</Text>
                </View>
                <Text numberOfLines={6} style={{ color: '#fff', marginTop: 10, fontSize: 16, fontFamily: 'Calibre' }}>{item["Description"]}</Text>
                <TouchableOpacity style={Styles.buttonLayer} onPress={() => openLink(item.Link)}>
                    <Text style={Styles.buttonText}>Click for more details</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let { donation, route } = this.props
        let isSecondary = route.params ? route.params.isSecondary : false

        return (<SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={Styles.container}>
                <Header navigation={this.props.navigation} isSecondary={isSecondary} title="Donation" />
                <Text style={{ backgroundColor: 'rgba(52,52,52,0.8)', padding: 5, marginTop: 5, marginBottom: 5, color: '#fff', fontFamily: 'Calibre', fontSize: 16}}>Do you love wildlife and want to help us in preserving it. Donate your bit today and make a difference. Below are the different donation options you can choose from.</Text>
                <View style={{ flex: 1 }}>
                    <Content>
                        <Accordion
                            style={{ borderColor: 'none' }}
                            dataArray={donation}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </Content>
                </View>
            </View>
        </SafeAreaView>)
    }
}

const mapStateToProps = props => {
    let { donation } = props
    return {
        donation: donation.donation_list
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getDonation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DonationScreen)