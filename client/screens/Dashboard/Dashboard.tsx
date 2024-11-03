import { FlatList, Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "@/models/categories";
import CategoryTile from "@/components/CategoryTile/CategoryTile";
import { useContext, useEffect, useState } from "react";
import { getProfileData } from "@/services/httpService";
import { ProfileData } from "@/models/profile";
import { UserDataContext } from "@/store/userData.context";
import { useIsFocused } from "@react-navigation/native";
import { Loader } from "@/components/Loader/Loader";

function Dashboard({ navigation }) {
  const isFocused = useIsFocused();
  const userDataCtx = useContext(UserDataContext);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedProfileData, setFetchedProfileData] = useState<ProfileData>({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: undefined,
  });

  useEffect(() => {
    setIsFetching(true);

    async function fetchProfile() {
      const profileData = await getProfileData();
      setFetchedProfileData(profileData[0]);
      userDataCtx.setUserData({ profile: profileData[0] });
    }

    if (isFocused) {
      fetchProfile();
      setIsFetching(false);
    }
  }, [isFocused]);

  function renderCategoryItem(itemData: any) {
    function navigate() {
      let screen = "ProfileForm";
      if (itemData.item.id === "c2") {
        screen = "AddressForm";
      } else if (itemData.item.id === "c3") {
        screen = "EmploymentForm";
      }

      navigation.navigate(screen);
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
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
        ></FlatList>
      )}
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
