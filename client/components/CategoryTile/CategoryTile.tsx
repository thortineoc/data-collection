import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryTile({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.category}>
      <Pressable onPress={onPress}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  category: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 30,
    margin: 20,
  },
});
