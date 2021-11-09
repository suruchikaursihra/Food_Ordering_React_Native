import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const foods = [
    {
        title: 'Chicken',
        description: 'With butter lettuce, lettuce, tomato 🔥',
        price: '$10.00',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-tall-FS-New-7374.webp'
    },
    {
        title: 'Chicken',
        description: 'With butter lettuce, lettuce, tomato 🔥',
        price: '$10.00',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-tall-FS-New-7374.webp'
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row', justifyContent: "space-between", margin: 20
    },
    titleStyle: {
        fontSize: 19, fontWeight: '600'
    }
})

export default function MenuItems() {
    return (
        <>
            {foods.map((food, index) => {
                return (
                    <View>
                        <View style={styles.menuItemStyle}>
                            <FoodInfo food={foods[0]} />
                            <FoodImage food={foods[0]} />
                        </View>
                    </View>
                )
            })}
        </>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return (
        <View>
            <Image source={{ uri: props.food.image }} style={{ width: 100, height: 100, borderRadius: 8 }} />
        </View>
    )
}