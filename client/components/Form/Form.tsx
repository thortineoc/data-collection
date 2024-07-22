import { View, StyleSheet, TextInput, Button } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="First name" />
      <TextInput style={styles.textInput} placeholder="Middle name" />
      <TextInput style={styles.textInput} placeholder="Last name" />
      <TextInput style={styles.textInput} placeholder="Address" />
      <TextInput style={styles.textInput} placeholder="Country" />
      <TextInput style={styles.textInput} placeholder="State/Region" />
      <TextInput style={styles.textInput} placeholder="City" />

      <View style={styles.button}>
        <Button title="Submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 8,
    margin: 8,
    minWidth: 250,
  },
  button: {
    marginTop: 20,
    padding: 8,
  },
});
