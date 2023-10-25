import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./NavScreens/HomeScreen";
import CreatePostsScreen from "./NavScreens/CreatePostsScreen";
import ProfileScreen from "./NavScreens/ProfileScreen";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: "#0000004D",
          backgroundColor: "#FFF",
          paddingBottom: 20,
          paddingHorizontal: 40,
          height: 80,
        },
      }}
    >
      <MainTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTitleStyle: {
            paddingLeft: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Feather
                style={styles.logOutIcon}
                name="log-out"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="grid" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: "Home",
        })}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerTitleStyle: {
            paddingRight: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.arrowBackIcon}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size }) => (
            <View style={styles.addIconWrapper}>
              <Ionicons name="add" size={size} color="#FFF" />
            </View>
          ),
          tabBarAccessibilityLabel: "CreatePost",
          tabBarActiveTintColor: "#FFF",
        })}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: "Profile",
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  addIconWrapper: {
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004D",
  },
});

export default TabNavigation;
