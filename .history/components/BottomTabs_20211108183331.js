import React from 'react'
import { View, Text } from 'react-native'

export default function BottomTabs() {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between' }}>
            <Text>BottomTabs</Text>
        </View>
    )
}


const Icon = (props) => {
    <FontAwesome5 name={props.icon} size={25} style={{ marginBottom: 3, alignItems: 'center' }} />
}