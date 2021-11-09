import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
            <RestaurantInfo />
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
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

    </>
);

const RestaurantInfo = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Framhouse Kitchen Thai Cuisine</Text>
            <Text style={{ color: 'gray', fontSize: 13 }}>30-40 • min</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center',borderRadius:15 }}>
            <Text>4.5</Text>
        </View>
    </View>
);