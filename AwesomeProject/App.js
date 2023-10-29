import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import TabNavigation from "./Screens/BottomNav/Navigation";
import { Ionicons } from "@expo/vector-icons";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
