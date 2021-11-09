import React from 'react'
import { View, Text } from 'react-native'

const foods = [
    {
        title: 'Chicken',
        description: 'With butter lettuce, tomato, lettuce, tomato',
        price: '$10.00',
        image: require('../../assets/images/food1.jpg')
    }
]

export default function MenuItem() {
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}
