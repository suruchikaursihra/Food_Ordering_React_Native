import React from 'react'
import { View, Text, Image } from 'react-native'

export default function About(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formatCategories = (categories).map((cat) => cat.title).join(' · ');
    const description = `${formatCategories} ${price ? " · " + price : ''} · 🎫 · ${rating} ⭐️ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
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