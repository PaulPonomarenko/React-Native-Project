import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { EvilIcons, Feather, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const NewPosts = ({ posts, navigation }) => {
  // const { longitude } = posts;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <View>
              {item.photo.toString().includes("file") ? (
                <Image style={styles.image} source={{ uri: item.photo }} />
              ) : (
                <Image style={styles.image} source={item.photo} />
              )}

              {item.photoName && <Text>{item.photoName}</Text>}
            </View>
            <View style={styles.postActions}>
              <View style={styles.reactions}>
                <View style={styles.commentsContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CommentsScreen")}
                  >
                    <EvilIcons
                      name="comment"
                      size={24}
                      style={{ color: "#FF6C00" }}
                    />
                  </TouchableOpacity>
                  {item.comments ? (
                    <Text>{item.comments}</Text>
                  ) : (
                    <Text>0</Text>
                  )}
                </View>

                <View style={styles.commentsContainer}>
                  <TouchableOpacity>
                    <AntDesign
                      name="like2"
                      size={20}
                      style={{ color: "#FF6C00" }}
                    />
                  </TouchableOpacity>
                  {item.likes ? <Text>{item.likes}</Text> : <Text>0</Text>}
                </View>
              </View>
              <View style={{ marginRight: 15 }}>
                <TouchableOpacity
                  style={styles.location}
                  onPress={() => navigation.navigate("MapScreen", item)}
                >
                  <Feather name="map-pin" size={20} color="#BDBDBD" />
                  {item.locationName && (
                    <Text
                      style={{
                        textDecorationLine: "underline",
                        fontSize: 16,
                        color: "#212121",
                      }}
                    >
                      {item.locationName}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginHorizontal: 20,
  },
  image: {
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  commentsContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 8,
  },
  reactions: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default NewPosts;
