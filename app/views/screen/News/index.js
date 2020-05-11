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

    componentDidMount = () => {
        this.props.getNews()
    }


    render() {
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