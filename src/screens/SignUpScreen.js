import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native";
const SignUpScreen = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "USA", value: "apple" },
    { label: "UK", value: "banana" },
  ]);
  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand_Light.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/oxfresslogo.png")}
        style={{ width: 180, height: 180 }}
      />
      <Text style={styles.textStyle}>Enter your phone</Text>
      <Text style={styles.textStyle}>number</Text>
      <DropDownPicker
        style={styles.dropdownInput}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{
          width: "80%",
          alignSelf: "center",
        }}
        placeholder="Country/Region"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Phone Number"
        keyboardType="numeric"
      />
      <TouchableOpacity style={{width:"80%",}} onPress={() => navigation.navigate("Code")}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    fontFamily: "Quicksand",
  },
  dropdownInput: {
    width: "80%",
    alignSelf: "center",
    borderRadius: 30,
  },
  input: {
    margin: 12,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  submitButton: {
    height: 55,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#0077FF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpScreen;
