import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleSheet,
} from "react-native";

function Input({
  label,
  invalid,
  textInputConfig,
}: {
  label: string;
  invalid: boolean;
  textInputConfig?: TextInputProps;
}) {
  return (
    <View>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[styles.textInput, invalid && styles.invalidInput]}
        {...textInputConfig}
      />
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
    marginHorizontal: 8,
    marginBottom: 14,
    minWidth: 250,
    backgroundColor: "white",
  },
  label: {
    color: "black",
    marginLeft: 8,
  },
  invalidLabel: {
    color: "red",
  },
  invalidInput: {
    borderColor: "red",
  },
});
