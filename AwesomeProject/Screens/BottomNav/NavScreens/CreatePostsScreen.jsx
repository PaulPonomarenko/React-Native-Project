import {
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";

const CreatePostsScreen = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
        >
          <View style={styles.container}>
            <View style={styles.mainContent}>
              {false ? (
                <View style={styles.openCamera}>
                  <TouchableOpacity style={styles.photoIconWrapper}>
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <Camera style={styles.openCamera}>
                  <TouchableOpacity
                    style={[
                      styles.photoIconWrapper,
                      { backgroundColor: "transparent" },
                    ]}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </Camera>
              )}

              <Text style={styles.photoPlaceCaption}>
                {true ? "Редагувати фото" : "Завантажте фото"}
              </Text>
              <View style={styles.photoInputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="Назва..."
                ></TextInput>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[styles.input, { paddingLeft: 28 }]}
                    placeholder="Місцевість..."
                  ></TextInput>
                  <Feather
                    style={styles.mapPinIcon}
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.mainPostBtn}>
                <Text style={styles.buttonText}>Опубліковати</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deleteBtnContainer}>
              <TouchableOpacity style={styles.deleteIconWrapper}>
                <AntDesign name="delete" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  mainContent: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  openCamera: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 5,
    position: "relative",
  },
  photoIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },

  photoPlaceCaption: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 20,
  },
  photoInputGroup: {
    gap: 10,
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    width: "100%",
    paddingVertical: 10,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  mapPinIcon: {
    position: "absolute",
    left: 0,
    top: "20%",
  },
  mainPostBtn: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18,
  },
  deleteBtnContainer: {
    alignItems: "center",
    paddingHorizontal: 80,
    paddingBottom: 20,
    paddingTop: 10,
  },
  deleteIconWrapper: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 23,
    paddingVertical: 8,
  },
});

export default CreatePostsScreen;
