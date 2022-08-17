import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import PostScreen from "./PostScreen";

function FeedBackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}




const Tab = createBottomTabNavigator();

const FeedScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "#2F3646",
        inactiveBackgroundColor: "#2F3646",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../assets/locationpin.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 50,
                marginBottom: 8,
              }}
            >
              <Image
                source={require("../assets/plus.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../assets/notification.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FeedScreen;
