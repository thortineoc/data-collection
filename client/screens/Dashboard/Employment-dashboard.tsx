import { EmploymentData } from "@/models/employment";
import { View, Text } from "react-native";

function EmploymentDashboard({ data }: { data?: EmploymentData }) {
  return (
    <View>
      <Text>Workplace: {data?.workplace}</Text>
      <Text>Job title: {data?.jobTitle}</Text>
    </View>
  );
}

export default EmploymentDashboard;
