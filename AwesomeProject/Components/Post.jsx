import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons, Feather, AntDesign } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/img/forest.png")}
        />
        <Text>Ліс</Text>
      </View>
      <View style={styles.postActions}>
        <View style={styles.reactions}>
          <View style={styles.commentsContainer}>
            <TouchableOpacity>
              <EvilIcons
                name="comment"
                size={24}
                style={{ color: "#FF6C00" }}
              />
            </TouchableOpacity>
            <Text>10</Text>
          </View>

          <View style={styles.commentsContainer}>
            <TouchableOpacity>
              <AntDesign name="like2" size={20} style={{ color: "#FF6C00" }} />
            </TouchableOpacity>
            <Text>150</Text>
          </View>
        </View>
        <View style={styles.commentsContainer}>
          <TouchableOpacity style={styles.location}>
            <Feather name="map-pin" size={20} color="#BDBDBD" />
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 16,
                color: "#212121",
              }}
            >
              Україна
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 32,
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

export default Post;
