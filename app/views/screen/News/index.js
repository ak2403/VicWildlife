import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNews } from '../../../action/NewsAction'

import NewsCard from '../../component/NewsCard'
import Popup from '../../component/Popup'
import ImageBG from '../../component/ImageBG'
import Header from '../../component/Header'
import BG from '../../../assets/images/quiz_bg.jpg';

import Styles from './style'

class NewsScreen extends Component {
    state = {
        showPopup: true,
        popupData: {"date_published": "2020-05-01T02:45:00.000Z", "image_links": ["https://api.breakingapi.com/download/images/B53B9C28A3D5419A884D6904079CD89C"], "link": "https://www.postregister.com/chronicle/news/connelly-wildlife-viewing-at-market-and-mud-lake-wmas/article_0d229c41-3ab7-5da1-84b5-61d0cc6168cd.html", "primary_image_link": "https://api.breakingapi.com/download/images/B53B9C28A3D5419A884D6904079CD89C", "snippet": "Springtime in eastern Idaho brings flowers, songbirds, and other wildlife, and many migratory waterfowl. Given Blackfoot's close proximity to the Snake River and ...", "source": {"description": "The Post Register is a U.S. daily newspaper serving the Idaho Falls, Idaho, area, as well as Jackson, Wyoming, and West Yellowstone, Montana. It is owned by the Adams Publishing Group.", "domain": "www.postregister.com", "id": "post-register", "locales": ["en-GB", "en-US", "en-TZ"], "logo": "https://api.breakingapi.com/download/logos/post-register.png", "name": "Post Register"}, "title": "Connelly: Wildlife viewing at Market and Mud Lake WMAs"}
    }
    // {"date_published": "2020-05-01T02:45:00.000Z", "image_links": ["https://api.breakingapi.com/download/images/B53B9C28A3D5419A884D6904079CD89C"], "link": "https://www.postregister.com/chronicle/news/connelly-wildlife-viewing-at-market-and-mud-lake-wmas/article_0d229c41-3ab7-5da1-84b5-61d0cc6168cd.html", "primary_image_link": "https://api.breakingapi.com/download/images/B53B9C28A3D5419A884D6904079CD89C", "snippet": "Springtime in eastern Idaho brings flowers, songbirds, and other wildlife, and many migratory waterfowl. Given Blackfoot's close proximity to the Snake River and ...", "source": {"description": "The Post Register is a U.S. daily newspaper serving the Idaho Falls, Idaho, area, as well as Jackson, Wyoming, and West Yellowstone, Montana. It is owned by the Adams Publishing Group.", "domain": "www.postregister.com", "id": "post-register", "locales": ["en-GB", "en-US", "en-TZ"], "logo": "https://api.breakingapi.com/download/logos/post-register.png", "name": "Post Register"}, "title": "Connelly: Wildlife viewing at Market and Mud Lake WMAs"}


    componentDidMount = () => {
        this.props.getNews()
    }

    openNews = data => {
        console.log(data)
        this.setState({
            showPopup: true,
            popupData: data
        })
    }

    render() {
        let {showPopup, popupData} = this.state
        let { latest_news } = this.props

        return (<SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1, position: 'relative' }}>
            <ImageBG name={BG} />
            
            <View style={Styles.container}>
                <Header title="News" />

                <View>
                    <FlatList
                        key={item => item["Listed SPRAT TaxonID"]}
                        data={latest_news}
                        renderItem={item => <NewsCard onPress={data => this.openNews(data)} data={item.item} />} />
                </View>
                {/* {showPopup && <Popup data={popupData} />} */}
            </View>
        </SafeAreaView>)
    }
}

const mapStateToProps = props => {
    let { news } = props
    return {
        latest_news: news.latest_news
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getNews
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)