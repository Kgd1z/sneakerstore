import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useLinking from './navigation/useLinking';
import HomeScreen from './screens/HomeScreen';

import ShoeDetailScreen from './screens/ShoeDetailScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import ListScreen from './components/ListScreen';
import Popular from './components/Popular';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import Header from './components/Header';
import { ItemsContext } from './components/ItemsContext';
import { FavoriteContext } from './components/FavoriteContext';
import { CartContext } from './components/CartContext';

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <React.Fragment>
      <Header />
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: 'F1F1F1', marginLeft: 0, paddingLeft: 0 },
          tabStyle: { paddingLeft: 0, marginLeft: 0, width: 146 },
          labelStyle: { textTransform: 'none', fontSize: 22, fontWeight: '500' },
          indicatorStyle: { backgroundColor: 'black', width: 20, height: 3 },
          scrollEnabled: true,
        }}
      >
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Brands" component={Brands} />
      </Tab.Navigator>
    </React.Fragment>
  );
}

export default function App(props) {
  const [item, setCurrentItem] = React.useState([]);
  const [favorites, addFavorite] = React.useState([]);
  const [cart, addCart] = React.useState([]);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      <FavoriteContext.Provider value={{ favorites, addFavorite }}>
        <ItemsContext.Provider value={{ item, setCurrentItem }}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MyProfile" component={MyProfileScreen} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Favorites" component={Favorites} />

                <Stack.Screen name="ShoeDetail" component={ShoeDetailScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </ItemsContext.Provider>
      </FavoriteContext.Provider>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
