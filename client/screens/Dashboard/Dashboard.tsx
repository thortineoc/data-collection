import { FlatList, Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "@/models/categories";
import CategoryTile from "@/components/CategoryTile/CategoryTile";
import { useContext, useEffect, useState } from "react";
import { getAllData } from "@/services/httpService";
import { UserDataContext } from "@/store/userData.context";
import { useIsFocused } from "@react-navigation/native";
import { Loader } from "@/components/Loader/Loader";
import ProfileDashboard from "./Profile-dashboard";
import AddressDashboard from "./Address-dashboard";
import EmploymentDashboard from "./Employment-dashboard";

function Dashboard({ navigation }) {
  const isFocused = useIsFocused();
  const userDataCtx = useContext(UserDataContext);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);

    async function fetchData() {
      const userData = await getAllData();

      console.log(userData);
      userDataCtx.setUserData({
        profile: userData.profile,
        address: userData.address,
        employment: userData.employment,
      });
    }

    if (isFocused) {
      fetchData();
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
        onPress={navigate}
      >
        {itemData.item.id === "c1" && userDataCtx.profile && (
          <ProfileDashboard data={userDataCtx.profile} />
        )}
        {itemData.item.id === "c2" && userDataCtx.address && (
          <AddressDashboard data={userDataCtx.address} />
        )}
        {itemData.item.id === "c3" && userDataCtx.employment && (
          <EmploymentDashboard data={userDataCtx.employment} />
        )}
      </CategoryTile>
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
