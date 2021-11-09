import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
        </View>
    )
}

const RestaurantImage = () => (
    <>
        <Image source={{
            url: 'https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHRydWNrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        }}
            style={{ width: '100%', height: 200 }}
        />
        <TouchableOpacity>
            <MaterialCommunityIcons name="heart-outline" size={30} color="red" />
        </TouchableOpacity>

    </>
)