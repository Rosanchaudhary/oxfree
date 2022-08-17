import React from "react";
import { View, Text, Image } from "react-native";

const CommentList = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 212,
        width: "100%",
        backgroundColor: "#fff",
        marginTop: 10,
        padding: 20,
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
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            paddingLeft: 8,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit.
        </Text>
        <Text
          style={{
            padding: 8,

            fontSize: 13,
            fontWeight: "400",
          }}
        >
          10min ago
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
              width: 60,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/thumbs-up.png")}
              style={{ width: 22, height: 22 }}
            />
            <Text>React</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentList;
