import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'

var styles=StyleSheet.create({
    container:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:18
    },
    seperator:{
        flex:1,
        height:1,
        backgroundColor:'black'
    }
})

let icon=Platform.select({
    ios:require('../../App/assets/icons/ios-star.png'),
    android:require('../../App/assets/icons/md-star-outline.png')
});

export const Seperator=()=><View style={styles.seperator}></View>

export default ListItem = ({ item }) => {
    return <View style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
                <TouchableOpacity onPress={()=>alert('Star pressed')}>
                    <Image source={icon}/>
                </TouchableOpacity>
            </View>
}