import React from 'react'
import { View, Text } from 'react-native'

const foods = [
    {
        title: 'Chicken',
        description: 'With butter lettuce, tomato, lettuce, tomato',
        price: '$10.00',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-tall-FS-New-7374.webp'
    }
]

export default function MenuItem() {
    return (
        <View>
            {/* <FoodInfo/ food={foods[0]}> */}
            {/* <FoodImage/> */}
        </View>
    )
}
