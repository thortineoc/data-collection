import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CategoryTile({
  title,
  icon,
  onPress,
  children,
}: {
  title: string;
  icon: "person-outline" | "home-outline" | "briefcase-outline";
  onPress: () => void;
  children: any;
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
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name={icon} size={20} class={styles.icon} />
          </View>
          {children}
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
    paddingRight: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  icon: {
    marginLeft: 10,
    paddingBottom: 8,
  },
});
