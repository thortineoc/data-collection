import { FlatList, Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "@/models/categories";
import CategoryTile from "@/components/CategoryTile/CategoryTile";

function Dashboard({ navigation }) {
  function renderCategoryItem(itemData: any) {
    function navigate() {
      navigation.navigate("Form");
      console.log("clicked");
    }

    return (
      <CategoryTile
        title={itemData.item.title}
        icon={itemData.item.icon}
        onPress={navigate}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome do DataColl app</Text>
      <Text style={styles.subheader}>
        We need to collect your data and provide them to your employer.
      </Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      ></FlatList>
    </View>
  );
}

export default Dashboard;

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
