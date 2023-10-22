import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const onShowPassword = () => {
    setIsPasswordVisible((state) => !state);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -120 : -120}
    >
      <ImageBackground
        style={styles.backgroundImg}
        source={require("../assets/img/Photo_BG.jpg")}
      >
        <View style={styles.mainDiv}>
          <View style={styles.avatarBox}>
            <Image
              style={styles.avatar}
              source={require("../assets/img/NoImage.jpg")}
            />
            <TouchableOpacity>
              <Image
                style={styles.add}
                source={require("../assets/img/add.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>Реєстрація</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.formInputs}>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsShowKeyboard(true)}
              />
              <View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={isPasswordVisible}
                  placeholder="Пароль"
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TouchableOpacity
                  style={styles.showPass}
                  onPress={onShowPassword}
                >
                  <Text style={{ color: "#1B4371" }}>
                    {isPasswordVisible ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.mainBtn} onPress={keyboardHide}>
              <Text style={styles.mainBtnText}>Зареєстуватися</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              ...styles.navigationBtn,
              marginBottom: isShowKeyboard ? 20 : 60,
            }}
          >
            <Text style={styles.navigationText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 16,
  },
  formInputs: {
    gap: 16,
  },
  input: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#AAAA",
    height: 50,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    padding: 16,
  },
  mainDiv: {
    position: "relative",
    backgroundColor: "#FFF",
    paddingTop: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  header: {
    alignItems: "center",
    marginTop: 32,
  },
  showPass: {
    width: 72,
    height: 19,
    position: "absolute",
    right: 14,
    top: 16,
  },
  mainBtn: {
    marginTop: 30,
    height: 60,
    backgroundColor: "#FF6C00",
    borderRadius: 40,
    justifyContent: "center",
  },
  mainBtnText: {
    fontFamily: "Roboto-Medium",
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18,
  },
  navigationBtn: {
    marginTop: 16,
  },
  navigationText: {
    color: "#1B4371",
    textAlign: "center",
  },
  avatarBox: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 0,
    left: "50%",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: "translate(-60px, -60px)",
  },
  add: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -13,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },
});
