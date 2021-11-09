import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const foods = [
    {
        title: 'Chicken',
        description: 'With butter lettuce, tomato, lettuce, tomato',
        price: '$10.00',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-tall-FS-New-7374.webp'
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row', justifyContent: "space-between", margin: 20
    }
})

export default function MenuItems() {
    return (
        <View>
            <FoodInfo food={foods[0]} />
            {/* <FoodImage/> */}
        </View>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={{width: 240, justifyContent: 'space-evenly'}}>
            <Text>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}