import { ActivityIndicator, View, StyleSheet } from "react-native";

export function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
