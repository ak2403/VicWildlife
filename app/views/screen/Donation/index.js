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

let isDarkTheme = ''

class DonationScreen extends Component {

    componentDidMount = () => {
        this.props.getDonation()
    }

    _renderHeader(item, expanded) {
        return (
            <View style={[Styles.headerLayer, isDarkTheme ? Styles.darkView : Styles.lightView]}>
                <Text style={[Styles.contentText, isDarkTheme ? Styles.darkTextColor : Styles.lightTextColor]}>
                    {item["Donation Name"]}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} color={isDarkTheme ? "#fff" : '#333'} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} color={isDarkTheme ? "#fff" : '#333'} name="add-circle" />}
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={[Styles.contentLayer, isDarkTheme ? Styles.darkView : Styles.lightView]}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: isDarkTheme ? "#fff" : '#333', fontSize: 18, fontFamily: 'Calibre-Bold' }}>Organisation: </Text>
                    <Text style={{ color: isDarkTheme ? "#fff" : '#333', fontSize: 18, fontFamily: 'Calibre' }}>{item["Donation Organization"]}</Text>
                </View>
                <Text style={{ color: isDarkTheme ? "#fff" : '#333', marginTop: 10, fontSize: 16, fontFamily: 'Calibre' }}>{item["Description"]}</Text>
                <TouchableOpacity style={Styles.buttonLayer} onPress={() => openLink(item.Link)}>
                    <Text style={Styles.buttonText}>Click for more details</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let { donation, route, darkTheme } = this.props
        let isSecondary = route.params ? route.params.isSecondary : false
        isDarkTheme = darkTheme;

        return (<SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={Styles.container}>
                <Header navigation={this.props.navigation} isSecondary={isSecondary} title="Donation" />

                <View style={[Styles.introView, darkTheme ? Styles.darkView : Styles.lightView]}>
                    <Text style={[Styles.introText, darkTheme ? Styles.darkTextColor : Styles.lightTextColor]}>Do you love wildlife and want to help us in preserving it. Donate your bit today and make a difference. Below are the different donation options you can choose from.</Text>
                </View>
                
                <View style={{ flex: 1 }}>
                    <Content>
                        <Accordion
                            style={{ borderColor: 'none' }}
                            dataArray={donation}
                            animation={true}
                            expanded={true}
                            theme={darkTheme}
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
    let { donation, authentication } = props
    return {
        donation: donation.donation_list,
        darkTheme: authentication.darkTheme
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getDonation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DonationScreen)