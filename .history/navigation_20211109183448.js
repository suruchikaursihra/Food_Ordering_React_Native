import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail';


export default function RootNavigation({ navigation }) {

    const Stack = createStackNavigator();

    const screensOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screensOptions={screensOptions}>
                <Stack.Screen name="Home" component={Home} navigation={navigation} />
                <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} navigation={navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
