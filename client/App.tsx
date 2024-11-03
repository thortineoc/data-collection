import Dashboard from "@/screens/Dashboard/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileForm from "./screens/ProfileForm/ProfileForm";
import AddressForm from "./screens/AddressForm/AddressForm";
import EmploymentForm from "./screens/EmploymentForm/EmploymentForm";
import UserDataContextProvider from "./store/userData.context";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <UserDataContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ProfileForm"
            component={ProfileForm}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="AddressForm"
            component={AddressForm}
            options={{ title: "Address" }}
          />
          <Stack.Screen
            name="EmploymentForm"
            component={EmploymentForm}
            options={{ title: "Employment" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDataContextProvider>
  );
}
