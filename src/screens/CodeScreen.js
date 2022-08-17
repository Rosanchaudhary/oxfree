import React, { useState, useRef } from "react";
import { View, StyleSheet, Image, Text, TextInput ,TouchableOpacity} from "react-native";

const CodeScreen = ({navigation}) => {
  const [one, onChangeOne] = useState(null);
  const [two, onChangeTwo] = useState(null);
  const [three, onChangeThree] = useState(null);
  const [four, onChangeFour] = useState(null);

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/oxfresslogo.png")}
        style={{ width: 180, height: 180 }}
      />
      <Text style={styles.textStyle}>Enter The Code We</Text>
      <Text style={styles.textStyle}>Texted You</Text>
      <View style={styles.otpInputs}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeOne}
          value={one}
          keyboardType="numeric"
          onSubmitEditing={() => ref_input2.current.focus()}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTwo}
          value={two}
          keyboardType="numeric"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangeThree}
          value={three}
          keyboardType="numeric"
          onSubmitEditing={() => ref_input4.current.focus()}
          ref={ref_input3}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFour}
          value={four}
          keyboardType="numeric"
          ref={ref_input4}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{ width: "90%" }}
        onPress={() => navigation.navigate("FeedScreen")}
      >
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  submitButton: {
    height: 55,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#0077FF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  otpInputs: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    margin: 12,
    width: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
  },
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
});

export default CodeScreen;
