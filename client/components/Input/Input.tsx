import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleSheet,
} from "react-native";

function Input({
  label,
  textInputConfig,
}: {
  label: string;
  textInputConfig?: TextInputProps;
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 8,
    margin: 8,
    minWidth: 250,
  },
  label: {
    color: "black",
  },
});
