import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Detail from './Detail';
const Stack = createNativeStackNavigator();
const NewsTab = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NewsTab