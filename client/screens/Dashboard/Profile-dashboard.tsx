import { ProfileData } from "@/models/profile";
import { View, Text } from "react-native";

function ProfileDashboard({ data }: { data: ProfileData }) {
  return (
    <View>
      <Text>First name: {data?.firstName}</Text>
      {data?.middleName && <Text>Middle name: {data?.middleName}</Text>}
      <Text>Last Name: {data?.lastName}</Text>
    </View>
  );
}

export default ProfileDashboard;
