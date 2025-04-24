//App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Handles navigation containet
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Handles stack navigation
import HomeScreen from './screens/HomeScreen'; // Import HomeScreen component
import VibeFilterScreen from './screens/VibeFilterScreen'; //Import your vibe filter screen

//create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* This wraps your whole app in a navigation context */}
            <Stack.Navigator>
                {/* Define all the screens in the app here */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="VibeFilter" component={VibeFilterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}