import { Text, Image, StyleSheet, View } from "react-native";

const HomeScreen = () => {
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
  },
  mainContent: {
    flex: 0.84,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "flex-start",
  },
  useInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    resizeMode: "cover",
  },
});

export default HomeScreen;
