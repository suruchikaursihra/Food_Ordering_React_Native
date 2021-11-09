import React from 'react'
import { View, Text, Image } from 'react-native'

const image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dailycamera.com%2F2020%2F12%2F02%2Fdenver-restaurants-dining-rules-level-red%2F&psig=AOvVaw19v-gSSFK3Mdo5rcrp1L6B&ust=1636467491397000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjNrtD6iPQCFQAAAAAdAAAAABAD";
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