import { ProfileData } from "@/models/profile";
import ProfileDashboard from "@/screens/Dashboard/Profile-dashboard";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryTile({
  title,
  icon,
  data,
  onPress,
}: {
  title: string;
  icon: string;
  data: ProfileData;
  onPress: () => void;
}) {
  return (
    <View style={styles.category}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: "#eee" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          {title === "profile" && <ProfileDashboard data={data} />}
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  category: {
    flex: 1,
    borderRadius: 8,
    height: 150,
    width: 300,
    margin: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 8,
  },
});
