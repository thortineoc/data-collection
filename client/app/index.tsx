import Form from "@/components/Form/Form";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome do DataColl app</Text>
      <Text style={styles.subheader}>
        We need to collect your data and provide them to your employer.
      </Text>
      <Form />
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
    marginBottom: 10,
  },
  subheader: {
    marginBottom: 20,
  },
});
