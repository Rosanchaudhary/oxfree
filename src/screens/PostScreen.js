import React from "react";

import { View, StyleSheet, Image, Text, TextInput } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontWeight: "700",
          }}
        >
          Create a post
        </Text>
      </View>
<Text>Hell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  lineStyle:{
    width:"100%",
    borderWidth:10,
    borderColor:'black',
    margin:10,
}
});

export default PostScreen;
