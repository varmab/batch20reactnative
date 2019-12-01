import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import items from '../data/items'
import ListItem, { Seperator } from '../components/ListItem';

export default CurrentList = () => {
    return (
        <ScrollView>
            {
                items.map((item) => {
                    return (<React.Fragment>
                            <ListItem key={item.id} item={item} />
                            <Seperator/>
                        </React.Fragment>)
                })
            }
        </ScrollView>
    )
}



