import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart() {
    return (
        <View>
            <TouchableOpacity style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
            }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Test Cart</Text>
            </TouchableOpacity>
        </View>
    )
}
