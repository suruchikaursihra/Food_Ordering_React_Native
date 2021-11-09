import React from 'react'
import { View, Text } from 'react-native'

const foods = [
    {
        title: 'Chicken',
        description: 'With butter lettuce, tomato, lettuce, tomato',
        price: '$10.00',
        image: 'https://www.shutterstock.com/image-photo/baked-whole-chicken-mushrooms-potatoes-close-777523459'
    }
]

export default function MenuItem() {
    return (
        <View>
            <Text>Menu</Text>
        </View>
    )
}
