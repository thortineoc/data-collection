import { Button, Text, View, StyleSheet } from "react-native";

export default function DocumentForm({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload photo of the document</Text>
      <Button title="Upload" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    paddingHorizontal: 6,
  },
  header: {
    fontSize: 24,
    marginBottom: 30,
  },
});
