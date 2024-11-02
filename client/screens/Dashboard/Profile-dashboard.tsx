import { ProfileData } from "@/models/profile";
import { mapDate } from "@/utils/utils";
import { View, Text } from "react-native";

function ProfileDashboard({ data }: { data: ProfileData }) {
  return (
    <View>
      <Text>First name: {data?.firstName}</Text>
      {data?.middleName && <Text>Middle name: {data?.middleName}</Text>}
      <Text>Last Name: {data?.lastName}</Text>
      <Text>Date of birth: {mapDate(data?.dateOfBirth)}</Text>
    </View>
  );
}

export default ProfileDashboard;
