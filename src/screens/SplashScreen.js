import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => { 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <View style={styles.container}>
        <Image
          source={require("../assets/oxfresslogo.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.textStyle}>Oxfess</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    backgroundColor: "#0077FF",
    alignItems: "center",
    justifyContent: "center",
    height:"100%"
  },
  textStyle: {
    fontSize: 45,
    fontWeight: "700",
    color: "#fff",
  },
});

export default SplashScreen;
