import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import home from './screens/home';
import splashscreen from './screens/splashscreen';
import search from './screens/search';
import wishlist from './screens/wishlist';
import akun from './screens/akun';
import detailAyam from './screens/detailAyam';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {height: 65},
          tabBarActiveTintColor: '#fb6107',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={search}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {height: 70},
          headerShown: false,
          tabBarActiveTintColor: '#fb6107',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-search-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={wishlist}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {height: 70},
          headerShown: false,
          tabBarActiveTintColor: '#fb6107',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-bookmark-outline" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={akun}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {height: 70},
          headerShown: false,
          tabBarActiveTintColor: '#fb6107',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({color}) => (
            <Icon name="user-o" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashscreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="splashscreen" component={splashscreen} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="detailAyam" component={detailAyam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
