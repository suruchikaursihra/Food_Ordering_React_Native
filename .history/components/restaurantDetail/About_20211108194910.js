import React from 'react'
import { View, Text, Image } from 'react-native'

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwYTMEgS1_xTfv37G5HIQhla5rpyfYzMD9A&usqp=CAU";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai · Comfort Food · $$ · 🎫 · 4 ⭐️ (2913+)";

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => {
    return <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
}

const RestaurantTitle = (props) => {
    return <Text style={{ fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>{props.title}</Text>
}

const RestaurantDescription = (props) => {
    return <Text style={{ fontSize: 15.5, fontWeight: '400', marginTop: 10, marginHorizontal: 15 }}>{props.description}</Text>
}