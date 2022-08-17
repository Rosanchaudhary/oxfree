import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text>H</Text>
      <Image
        source={require("../assets/oxfresslogo.png")}
        style={{ width: 60, height: 60 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 93,
          height: 40,
          backgroundColor: "#E9F4FF",
          borderRadius: 4,
        }}
      >
        <Image
          source={require("../assets/pizzaslice.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "black",
          }}
        >
          4/10
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"white"
  },
});
export default AppBar;
