import { AddressData } from "@/models/address";
import { View, Text } from "react-native";

function AddressDashboard({ data }: { data?: AddressData }) {
  return (
    <View>
      <Text>Address: {data?.address}</Text>
      <Text>Zip: {data?.zip}</Text>
      <Text>Country: {data?.country}</Text>
      <Text>State: {data?.state}</Text>
      <Text>City: {data?.city}</Text>
    </View>
  );
}

export default AddressDashboard;
