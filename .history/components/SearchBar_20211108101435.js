import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                query={{ key: 'AIzaSyBk1QGhiL0N2CUTp8r8VGBc3ADEDkbsujE' }}
                onPress={(data, details = null) => {
                    console.log(data, details);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}

                renderLeftButton={() =>
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>}

                renderRightButton={() =>
                    <View style={{
                        backgroundColor: 'white',
                        marginRight: 10,
                        padding: 9,
                        borderRadius: 50,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 5 }} />
                        <Text>Search</Text>

                    </View>}
            />
        </View>
    )
}
