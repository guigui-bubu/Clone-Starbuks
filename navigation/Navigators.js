// Librairies
import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigators
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Composant
import HeaderButton from '../components/UI/HeaderButton/HeaderButton';

// Ecrans
import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';

// Variable
const headerOptions = {
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : Colors.primary,
        borderColor: Colors.primary,
        borderBottomWidth: 1,
    },
};

// MainStackNavigator
const MainStackNavigatorComponent = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStackNavigatorComponent.Navigator>
            <MainStackNavigatorComponent.Screen
                name="Home"
                component={HomeScreen}
                options={props => ({
                    title: 'Accueil',
                    ...headerOptions,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="Places"
                                iconName="location-outline"
                                onPress={() => props.navigation.navigate('Places')}
                            />
                        </HeaderButtons>
                    ),
                    // headerShown: false,
                })}
            />
            <MainStackNavigatorComponent.Screen
                name="Places"
                component={PlacesScreen}
                options={{
                    title: 'Les salons Starbucks',
                    ...headerOptions,
                }}
            />
        </MainStackNavigatorComponent.Navigator>
    );
};

// AppTabNavigator
const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
    return (
        <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TabHome') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'TabPlaces') {
                        iconName = focused ? 'location' : 'location-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.primary,
                // inactiveTintColor: Colors.primaryFaded,
                // activeBackgroundColor: 'blue',
                // inactiveBackgroundColor: 'red',
            }}
            // initialRouteName="TabPlaces"
        >
            <TabNavigator.Screen
                name="TabHome"
                component={MainStackNavigator}
                options={{ title: 'Accueil' }}
            />
            <TabNavigator.Screen
                name="TabPlaces"
                component={PlacesScreen}
                options={{ title: 'Salons' }}
            />
        </TabNavigator.Navigator>
    );
};

// AppDrawerNavigator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="DrawerApp" component={AppTabNavigator} />
        </DrawerNavigator.Navigator>
    );
};

// Drawer
// Tab
// Stack
