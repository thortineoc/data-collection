import { FlatList, Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "@/models/categories";
import CategoryTile from "@/components/CategoryTile/CategoryTile";
import { useContext, useEffect, useState } from "react";
import { getProfileData } from "@/services/httpService";
import { ProfileData } from "@/models/profile";
import { UserDataContext } from "@/store/userData.context";

function Dashboard({ navigation }) {
  const userDataCtx = useContext(UserDataContext);
  const [fetchedProfileData, setFetchedProfileData] = useState<ProfileData>([]);

  useEffect(() => {
    async function fetchProfile() {
      const profileData = await getProfileData();
      setFetchedProfileData(profileData[0]);
      console.log(profileData[0]);
      userDataCtx.setUserData({ profile: profileData[0] });
    }

    fetchProfile();
  }, []);

  function renderCategoryItem(itemData: any) {
    function navigate() {
      console.log(itemData);

      let screen = "ProfileForm";
      if (itemData.item.id === "c2") {
        screen = "AddressForm";
      } else if (itemData.item.id === "c3") {
        screen = "EmploymentForm";
      }

      navigation.navigate(screen);
      console.log("clicked");
    }

    return (
      <CategoryTile
        title={itemData.item.title}
        icon={itemData.item.icon}
        data={fetchedProfileData}
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
