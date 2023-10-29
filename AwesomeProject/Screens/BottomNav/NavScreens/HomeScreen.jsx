import {
  Text,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { useState, useEffect } from "react";
import NewPosts from "../../../Components/NewPosts";
import { defaultPost } from "../../../Data/defaultPosts";

const HomeScreen = ({ route }) => {
  const [posts, setPosts] = useState(defaultPost);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      console.log(route.params);
    }
  }, [route.params]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.useInfo}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/img/NoImage.jpg")}
            />
            <View>
              <Text>Natali Romanova</Text>
              <Text>email@example.com</Text>
            </View>
          </View>

          <NewPosts posts={posts} route={route} navigation={navigation} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  mainContent: {
    marginTop: 10,
    flex: 0.9,
    justifyContent: "flex-start",
  },
  useInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginLeft: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    resizeMode: "cover",
  },
});

export default HomeScreen;
