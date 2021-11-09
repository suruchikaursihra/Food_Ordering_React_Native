import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function SearchBar() {
    return (
        <View style={{ marginTop: 50, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                style={{
                    backgroundColor: '#eee',
                    borderRadius: 10,
                    fontWeight: 700,
                    marginTop: 7
                }}
            />
        </View>
    )
}
