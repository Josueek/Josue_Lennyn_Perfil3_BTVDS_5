// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import inicio from './src/screens/inicio';
import estudiantes from './src/screens/estudiantes';
import comidasfav from './src/screens/comidas';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="inicio" 
                component={inicio} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="estudiantes" 
                component={estudiantes} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="school" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name="comidasfav" 
                component={comidasfav} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="restaurant" color={color} size={size} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
