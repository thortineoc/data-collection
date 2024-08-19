import { View, StyleSheet, Button } from "react-native";
import Input from "../Input/Input";

export default function Form() {
  return (
    <View style={styles.container}>
      <Input
        label="First name"
        textInputConfig={{
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: (text) => {
            console.log(text);
          },
        }}
      />
      <Input label="Middle name" />
      <Input label="Last name" />
      <Input label="Address" />
      <Input label="Country" />
      <Input label="State/Region" />
      <Input label="City" />

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
  button: {
    marginTop: 20,
    padding: 8,
  },
});
