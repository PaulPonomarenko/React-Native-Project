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
} from "react-native";
import { useState } from "react";

export const LoginScreen = () => {
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
          <View style={styles.header}>
            <Text style={styles.text}>Увійти</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.formInputs}>
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
              <Text style={styles.mainBtnText}>Увійти</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              ...styles.navigationBtn,
              marginBottom: isShowKeyboard ? 20 : 60,
            }}
          >
            <Text style={styles.navigationText}>
              Немає акаунту? Зареєструватися
            </Text>
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
});
