import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Email">
        </TextInput>
          <TextInput 
            style={styles.input2} 
            placeholder="First Name">
          </TextInput>
      </View>
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
    width: 140,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  form: {
    backgroundColor: "#fff",
    justifyContent: 'space-between',
  },
});
