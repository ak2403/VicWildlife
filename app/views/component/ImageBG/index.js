import React from 'react'
import { View, Image } from 'react-native'

import BG from '../../../assets/images/bg.jpg'

const ImageBG = props => {
    let { name } = props
    
    return (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            <Image source={BG} style={{
                flex: 1, width: null,
                height: null, alignSelf: 'stretch',
            }}
                blurRadius={5} />
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

            </View>

        </View>
    )
}

export default ImageBG
