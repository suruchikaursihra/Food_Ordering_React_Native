import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar';

const YELP_API_KEY = 'jgfZ_4ZpCjEkl9gtIXYlpvMxzU_HNdhgIfDfLueIG6whDdpYjKIjGF5pczbXNKv8c9nEMNUWlMd9pAIaw3BQKpkHqTCqupAjNevd72XflBDouqqNtH9a9FcJ0c2IYXYx';

export default function Home() {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = React.useState('Hollywood');
    const [activeTab, setActiveTab] = React.useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        fetch(url, {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.businesses)
                    setRestaurantData(data.businesses.filter(restaurant => restaurant.transactions.includes(activeTab.toLowerCase())));
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1, }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}
