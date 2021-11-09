import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail';


export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screensOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screensOptions={screensOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}