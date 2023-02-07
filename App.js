import CheckBox from '@react-native-community/checkbox';
import React, {Component} from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};

export default function App() {
  const [state, setState] = React.useState(initialState);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/signuptop_icon.png")} 
      />
      <View style={styles.form}>

        <TextInput 
          style={styles.input} 
          placeholder="Email">
        </TextInput>

        <View style={{flexDirection: 'row'}}>
          <TextInput 
            style={styles.input2} 
            placeholder="First Name">
          </TextInput>
          <TextInput 
            style={styles.input2} 
            placeholder="Last Name">
          </TextInput>
        </View>

        <TextInput 
          style={styles.input} 
          placeholder="Phone Number">
        </TextInput>

        <TextInput 
          style={styles.input} 
          placeholder="Password">
        </TextInput>

        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password">
        </TextInput>

      </View>

      <View style={{flexDirection: 'row', }}>
        <Text style={{textDecorationLine:'underline'}}>
          I agree to the terms and conditions
        </Text>
      </View>

        <TouchableOpacity onPress={() => Alert.alert("Submission", "Confirm submission?", [{text: "Yes"/*, onPress:...*/}, {text: "No"/*, onPress:...*/},])}>
          <Image style={{
            margin: 10,
          }}
          source={require("./assets/submit_button.png")}/>
        </TouchableOpacity>

        <Text 
          style={{
            textDecorationLine: 'underline'
          }}
          /*onPress=...*/>
          Already a member? Log in
        </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 280,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  input2: {
    width: 130,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  form: {
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    margin: 20,
  },
});
