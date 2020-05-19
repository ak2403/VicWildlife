import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
            console.log("Don't know how to open URI: " + link);
        }
    });
};

const DonationCard = ({ data, theme }) => {
    let { item } = data
    return <View style={Styles.CardContainer}>
        <Text style={Styles.titleText}>{item["Donation Name"]}</Text>
        <Text style={Styles.subtitleText}>{item["Donation Organization"]}</Text>
        <Text style={Styles.contentText}>{item["Description"]}</Text>
        <TouchableOpacity style={Styles.buttonLayer} onPress={() => openLink(item.Link)}>
            <Text style={Styles.buttonText}>Click for more details</Text>
        </TouchableOpacity>
    </View>
}

class DonationScreen extends Component {

    componentDidMount = () => {
        this.props.getDonation()
    }

    render() {
        let { donation, route } = this.props
        let isSecondary = route.params ? route.params.isSecondary : false

        return (<SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={Styles.container}>
                <Header navigation={this.props.navigation} isSecondary={isSecondary} title="Donation" />

                <View>
                    <FlatList
                        data={donation}
                        renderItem={item => <DonationCard data={item} theme={""} /> } />
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