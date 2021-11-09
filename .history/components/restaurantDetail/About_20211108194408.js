import React from 'react'
import { View, Text, Image } from 'react-native'

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQams26cxYBFlHYAoFudfRREfeY-52zp5fJYA&usqp=CAU";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai · Comfort Food · $$ · 🎫 · 4 ⭐️ (2913+)";

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            {/* <RestaurantTitle */}
            {/* <RestaurantDescription /> */}
        </View>
    )
}

const RestaurantImage = (props) => {
    return <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
}
