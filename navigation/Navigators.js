// Librairies
import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";

// Composants
import HeaderButton from "../components/UI/HeaderButton/HeaderButton";
import DrawerContentScreen from "../screens/drawer/DrawerContentScreen";

// Ecrans
import HomeScreen from "../screens/Home";
import PlacesScreen from "../screens/Places";
import InformationsScreen from "../screens/Informations";

// Variable
const headerOptions = {
  headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
  headerStyle: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : Colors.primary,
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
        options={(props) => ({
          title: "Accueil",
          ...headerOptions,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Places"
                iconName="information-circle-outline"
                onPress={() => props.navigation.navigate("Informations")}
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
          title: "Les salons Starbucks",
          ...headerOptions,
        }}
      />
    </MainStackNavigatorComponent.Navigator>
  );
};

//  ModalStackNavigator

const ModalNavigator = createStackNavigator();

const ModalStackNavigator = () => {
  return (
    <ModalNavigator.Navigator mode="modal">
      <ModalNavigator.Screen
        name="Main"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <ModalNavigator.Screen
        name="Informations"
        component={InformationsScreen}
        options={{ headerShown: false }}
      />
    </ModalNavigator.Navigator>
  );
};

// PlacesStackNavigator

const PlacesNavigator = createStackNavigator();

const PlacesStackNavigator = () => {
  return (
    <PlacesNavigator.Navigator>
      <PlacesNavigator.Screen
        name="StackPlaces"
        component={PlacesScreen}
        options={(props) => ({
          title: "Salons de Starbucks",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="menu"
                onPress={
                  () => props.navigation.dispatch(DrawerActions.toggleDrawer()) // ferme le menu ou ouvre le menu si fermer
                }
              />
            </HeaderButtons>
          ),
          ...headerOptions,
        })}
      />
    </PlacesNavigator.Navigator>
  );
};

// AppTabNavigator
const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // focused => parametre pour aplliquer des icones
          let iconName;

          if (route.name === "TabHome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TabPlaces") {
            iconName = focused ? "location" : "location-outline";
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
        component={ModalStackNavigator}
        options={{ title: "Accueil" }}
      />
      <TabNavigator.Screen
        name="TabPlaces"
        component={PlacesStackNavigator}
        options={{ title: "Salons" }}
      />
    </TabNavigator.Navigator>
  );
};

// AppDrawerNavigator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
      drawerContent={(props) => <DrawerContentScreen {...props} />}
      screenOptions={{ swipeEnabled: false }} // permet d'ouvrir le drawer avec un bouton et non en le glissant de gauche à droite
      // drawerPosition="right" // permet de mettre le drawer à droite
      // openByDefault={true} // permet de rentrer sur l'apli avec le menu déroulant
      drawerType="slide" // Element qui bouge
    >
      <DrawerNavigator.Screen
        name="DrawerApp"
        component={AppTabNavigator}
        options={{
          title: "Acceuil",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};
