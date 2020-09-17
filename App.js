import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import useLinking from "./navigation/useLinking";
import HomeScreen from "./screens/HomeScreen";

import ShoeDetailScreen from "./screens/ShoeDetailScreen";

import ListScreen from "./components/ListScreen";
import { ItemsContext } from "./components/ItemsContext";
import { FavoriteContext } from "./components/FavoriteContext";

const Stack = createStackNavigator();

export default function App(props) {
  const [item, setCurrentItem] = React.useState([]);
  const [favorites, addFavorite] = React.useState([]);
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <FavoriteContext.Provider value={{ favorites, addFavorite }}>
        <ItemsContext.Provider value={{ item, setCurrentItem }}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <NavigationContainer
              ref={containerRef}
              initialState={initialNavigationState}
            >
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />

                <Stack.Screen name="ShoeDetail" component={ShoeDetailScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </ItemsContext.Provider>
      </FavoriteContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
