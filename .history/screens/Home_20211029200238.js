import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView>
            <View>
                <HeaderTabs />
            </View>
        </SafeAreaView>
    )
}
