import {
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(undefined);
  const [activePhotoScreen, setActivePhotoScreen] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [locationName, setLocationName] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const navigation = useNavigation();

  async function takePhoto() {
    const { uri } = await camera.takePictureAsync();
    await MediaLibrary.createAssetAsync(uri);
    setPhoto(uri);
    setActivePhotoScreen(false);
  }

  async function onPublishPost() {
    if (!photo) {
      return Alert.alert("Please select photo");
    }
    if (!photoName === "") {
      return Alert.alert("Please give title to your photo");
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    if (!coords) {
      return;
    }
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
    navigation.navigate("Home", {
      photo,
      locationName,
      photoName,
      latitude,
      longitude,
    });

    reset();
  }

  if (hasCameraPermission === false) {
    Alert.alert("Accsess to camera denied");
  }

  function reset() {
    setPhoto(undefined);
    setLocationName("");
    setPhotoName("");
  }

  function onChangePostButtonStyle() {
    const state = photoName && photo;
    if (!state) {
      return { backGroundColor: "#F6F6F6", textColor: "#BDBDBD" };
    }

    return { backGroundColor: "#FF6C00", textColor: "#FFF" };
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

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
              {photo ? (
                <Image source={{ uri: photo }} style={styles.openCamera} />
              ) : (
                <View style={styles.openCamera}>
                  <TouchableOpacity
                    style={styles.photoIconWrapper}
                    onPress={() => setActivePhotoScreen(true)}
                  >
                    <MaterialIcons
                      name="photo-camera"
                      size={24}
                      color="#BDBDBD"
                    />
                  </TouchableOpacity>
                </View>
              )}
              {photo ? (
                <Text style={styles.photoPlaceCaption}>Редагувати фото</Text>
              ) : (
                <Text
                  style={styles.photoPlaceCaption}
                  onPress={() => setActivePhotoScreen(true)}
                >
                  Завантажте фото
                </Text>
              )}

              <View style={styles.photoInputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="Назва..."
                  value={photoName}
                  onChangeText={setPhotoName}
                />
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[styles.input, { paddingLeft: 28 }]}
                    placeholder="Місцевість..."
                    value={locationName}
                    onChangeText={setLocationName}
                  />
                  <Feather
                    style={styles.mapPinIcon}
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </View>
              <TouchableOpacity
                style={[
                  styles.mainPostBtn,
                  {
                    backgroundColor: `${
                      onChangePostButtonStyle().backGroundColor
                    }`,
                  },
                ]}
                onPress={onPublishPost}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: `${onChangePostButtonStyle().textColor}` },
                  ]}
                >
                  Опубліковати
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deleteBtnContainer}>
              <TouchableOpacity
                style={styles.deleteIconWrapper}
                onPress={() => reset()}
              >
                <AntDesign name="delete" size={16} color="black" />
              </TouchableOpacity>
            </View>
            {activePhotoScreen && (
              <Camera
                style={styles.photoScreenContainer}
                ref={setCamera}
                ratio="3:4"
              >
                <View
                  style={{
                    borderColor: "#FFF",
                    borderWidth: 1,
                    position: "absolute",
                    top: 3,
                    left: 2,
                  }}
                >
                  <Image
                    source={{ uri: photo }}
                    style={{ height: 200, width: 200 }}
                  />
                </View>

                <TouchableOpacity
                  style={[
                    styles.photoIconWrapper,
                    { backgroundColor: "#FFFFFF4D", top: "85%", left: "42%" },
                  ]}
                  onPress={takePhoto}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </Camera>
            )}
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
  photoScreenContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default CreatePostsScreen;
