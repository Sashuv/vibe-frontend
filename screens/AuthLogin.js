import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../assets/colors";
import Popular from "../assets/popularTags";

const AuthLogin = ({ navigation }) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator="false">
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity>
              <Text
                style={styles.headerLogo}
                onPress={() => navigation.navigate("Home")}
              >
                vibes
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.title}>
          <Text style={styles.titleText}>Welcome Back!</Text>
        </View>
        {/* Inputs */}
        <KeyboardAvoidingView>
          <View style={styles.inputs}>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.text}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backtoSignUp}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Don't have an account?
            </Text>
            <Text style={styles.backTextLink}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  headerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },

  headerLogo: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
  },
  loginScreen: {
    //   alignItems: "center",
    //   justifyContent: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 30,
  },

  titleSubText: {
    fontSize: 15,
    color: colors.primary,
  },
  inputs: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  backtoSignUp: {
    flexDirection: "row",
    marginTop: 20,
  },

  backTextLink: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
export default AuthLogin;
