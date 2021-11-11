import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function ViewCart() {
    return (
        <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <TouchableOpacity
                style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    padding: 13,
                    borderRadius: 30,
                    width: 300,
                    position: 'relative'
                }}
            >
                <Text style={{ color: 'white', fontSize: 20 }}>VIEW </Text>
            </TouchableOpacity>
        </View>
    )
}
