import React from "react";

import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const PostList = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 212,
        width: "100%",
        backgroundColor: "#fff",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 18,
        }}
      >
        <View
          style={{
            backgroundColor: "#F0E9FF",
            borderRadius: 50,
            marginBottom: 8,
            borderColor: "#A17EE7",
            borderWidth: 2,
            height: 37,
            width: 37,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/color-palette.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <Text> 10min ago | ~30m away</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 31,
            width: 100,
            backgroundColor: "#F2F7FF",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/speech_bubble.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Comment</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 31,
            width: 70,
            backgroundColor: "#F2FFF5",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/send.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Share</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 31,
            width: 70,
            backgroundColor: "#FFF2F2",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/caution-sign.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Report</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 31,
            width: 60,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/thumbs-up.png")}
            style={{ width: 22, height: 22 }}
          />
          <Text>100</Text> 
        </View>
      </View>
    </View>
  );
};

export default PostList;
