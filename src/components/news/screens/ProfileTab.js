import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './Profile';
import ProfileUpdate from './ProfileUpdate';

const Stack = createNativeStackNavigator();

const ProfileTab = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerShown: false }} name="ProfileUpdate" component={ProfileUpdate} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProfileTab

const styles = StyleSheet.create({})