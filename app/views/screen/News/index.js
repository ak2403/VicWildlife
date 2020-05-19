import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNews } from '../../../action/NewsAction'

import NewsCard from '../../component/NewsCard'
import SmokeScreen from '../../component/SmokeScreen'
import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/quiz_bg.jpg';

import Styles from './style'

class NewsScreen extends Component {

    state = {
        isOfflineMode: false
    }

    componentDidMount = () => {
        let { offlineMode } = this.props
        if (!offlineMode) {
            this.props.getNews()
        } else {
            this.setState({
                isOfflineMode: true
            })
        }
    }

    componentDidUpdate = () => {
        let { offlineMode } = this.props
        let { isOfflineMode } = this.state

        if (isOfflineMode && !offlineMode) {
            this.props.getNews()
            this.setState({
                isOfflineMode: false
            })
        }
        return true
    }

    render() {
        let { latest_news, darkTheme, offlineMode } = this.props

        return (<SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />

            <View style={Styles.container}>
                <Header title="News" />

                <View style={{ flex: 1 }}>
                    {offlineMode ? <SmokeScreen text={"The NewsFeed is disabled because the app is in offline mode."} /> : <FlatList
                        key={item => item["Listed SPRAT TaxonID"]}
                        data={latest_news}
                        renderItem={item => <NewsCard theme={darkTheme} onPress={data => this.openNews(data)} data={item.item} />} />
                    }
                </View>
            </View>
        </SafeAreaView>)
    }
}

const mapStateToProps = props => {
    let { news, authentication } = props
    return {
        latest_news: news.latest_news,
        darkTheme: authentication.darkTheme,
        offlineMode: authentication.offlineMode
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getNews
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)