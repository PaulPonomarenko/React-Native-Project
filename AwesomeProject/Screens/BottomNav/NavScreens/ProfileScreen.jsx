import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";

import Post from "../../../Components/Post";

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require("../../../assets/img/Photo_BG.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/img/NoImage.jpg")}
          style={styles.userPhoto}
        />
        <View style={styles.userPhoto}>
          <TouchableOpacity style={styles.closeIcon}>
            <AntDesign name="closecircleo" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>UserName</Text>

        <Post />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 64,
    paddingBottom: 64,
    backgroundColor: "#FFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },

  userPhoto: {
    width: 120,
    height: 120,
    backgroundColor: "transparent",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  closeIcon: {
    position: "absolute",
    bottom: 12.5,
    right: -12,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginTop: 8,
  },
  logOutButton: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  postContainer: {
    flexDirection: "column",
    gap: 20,
    paddingBottom: 20,
  },
});

export default ProfileScreen;
