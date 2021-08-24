// Libraries
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from './constants/Colors';

// Composant
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    // Police personnalisée
    let [fontsLoaded] = useFonts({
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    return <AppNavigator />;
}
