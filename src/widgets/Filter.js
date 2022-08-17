import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
const Filter = () => {
  return (
    <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 80,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor:"white"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#926AE5",
              borderRadius: 25,
              width: 100,
              height: 34,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/clock.png")}
              style={{ width: 22, height: 22 }}
            />
            <Text style={{}}>Recent</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#7BC16C",
              borderRadius: 25,
              width: 100,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/location.png")}
              style={{ width: 19, height: 28 }}
            />
            <Text
              style={{
                color: "#7BC16C",
              }}
            >
              Nearby
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#FC3821",
              borderRadius: 25,
              width: 100,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/fire.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text
              style={{
                color: "#FC3821",
              }}
            >
              Hot
            </Text>
          </View>
        </View>
  );
}

export default Filter