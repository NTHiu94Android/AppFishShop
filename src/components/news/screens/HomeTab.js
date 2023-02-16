import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewsTab from '../screens/NewsTab';
import ProfileTab from '../screens/ProfileTab';
import Search from '../screens/Search';
import InsertNew from '../screens/InsertNew';

const Tab = createBottomTabNavigator();
const HomeTab = () => {
    return (
        <NavigationContainer independent={true} screenOptions={tabBarStyle = {height:500}}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            if (focused) {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_home.png')}
                                />
                            } else {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_home1.png')}
                                />
                            }
                        }
                        if (route.name === 'Store') {
                            if (focused) {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_store2.png')}
                                />
                            } else {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover' 
                                    source={require('../../../image/ic_store1.png')}
                                />
                            }
                        }
                        if (route.name === 'Order') {
                            if (focused) {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_order2.png')}
                                />
                            } else {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_order1.png')}
                                />
                            }
                        }
                        if (route.name === 'ProfileTab') {
                            if (focused) {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_profile.png')}
                                />
                            } else {
                                return <Image
                                    style={{ width: 18, height: 18 }}
                                    resizeMode='cover'
                                    source={require('../../../image/ic_profile1.png')}
                                />
                            }
                        }
                        
                    },
                    //tabBarStyle: { height: 70 },
                    tabBarActiveTintColor: '#1877F2',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen options={{ headerShown: false, tabBarBadge: 3 }} name="Home" component={NewsTab}/>
                <Tab.Screen options={{ headerShown: false }} name="Store" component={Search} />
                <Tab.Screen options={{ headerShown: false }} name="Order" component={InsertNew} />
                <Tab.Screen options={{ headerShown: false }} name="ProfileTab" component={ProfileTab} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default HomeTab

const styles = StyleSheet.create({

})