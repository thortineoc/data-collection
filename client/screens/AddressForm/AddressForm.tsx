import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import { UserDataContext } from "@/store/userData.context";
import { storeAddressData, updateAddressData } from "@/services/httpService";
import { Loader } from "@/components/Loader/Loader";

export default function AddressForm({ navigation }) {
  const userDataCtx = useContext(UserDataContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addressData = userDataCtx.address;

  useEffect(() => {
    if (!!addressData) {
      setInputs({
        address: {
          value: addressData.address,
          isValid: true,
        },
        zip: {
          value: addressData.zip,
          isValid: true,
        },
        country: {
          value: addressData.country,
          isValid: true,
        },
        state: {
          value: addressData.state,
          isValid: true,
        },
        city: {
          value: addressData.city,
          isValid: true,
        },
      });
    }
  }, []);

  const [inputs, setInputs] = useState({
    address: { value: "", isValid: true },
    zip: { value: "", isValid: true },
    country: { value: "", isValid: true },
    state: { value: "", isValid: true },
    city: { value: "", isValid: true },
  });

  const formIsInvalid =
    !inputs.address.isValid ||
    !inputs.zip.isValid ||
    !inputs.country.isValid ||
    !inputs.state.isValid ||
    !inputs.city.isValid;

  function inputChangedHandler(inputId: string, enteredValue: string) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputId]: { value: enteredValue, isValid: true },
      };
    });
  }

  async function handleSubmit() {
    const formData = {
      address: inputs.address.value,
      zip: inputs.zip.value,
      country: inputs.country.value,
      state: inputs.state.value,
      city: inputs.city.value,
    };

    const isAddressValid = formData.address.trim().length > 0;
    const isZipValid = formData.zip.trim().length > 0;
    const isCountryValid = formData.country.trim().length > 0;
    const isStateValid = formData.state.trim().length > 0;
    const isCityValid = formData.city.trim().length > 0;

    if (
      !isAddressValid ||
      !isZipValid ||
      !isCountryValid ||
      !isStateValid ||
      !isCityValid
    ) {
      setInputs((currInputs) => {
        return {
          address: {
            value: currInputs.address.value,
            isValid: isAddressValid,
          },
          zip: {
            value: currInputs.zip.value,
            isValid: isZipValid,
          },
          country: {
            value: currInputs.country.value,
            isValid: isCountryValid,
          },
          state: {
            value: currInputs.state.value,
            isValid: isStateValid,
          },
          city: {
            value: currInputs.city.value,
            isValid: isCityValid,
          },
        };
      });
      return;
    }

    setIsSubmitting(true);
    if (addressData?.id) {
      await updateAddressData(formData, addressData.id);
    } else {
      await storeAddressData(formData);
    }
    setIsSubmitting(false);
    navigation.goBack();
  }

  if (isSubmitting) {
    return <Loader />;
  }
  return (
    <ScrollView style={styles.container}>
      <Input
        label="Address*"
        invalid={!inputs.address.isValid}
        textInputConfig={{
          placeholder: "Address",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "address"),
          value: inputs["address"].value,
        }}
      />
      <Input
        label="Zip code*"
        invalid={!inputs.zip.isValid}
        textInputConfig={{
          placeholder: "Zip code",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "zip"),
          value: inputs["zip"].value,
        }}
      />
      <Input
        label="Country*"
        invalid={!inputs.country.isValid}
        textInputConfig={{
          placeholder: "Country",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "country"),
          value: inputs["country"].value,
        }}
      />
      <Input
        label="State/Region*"
        invalid={!inputs.state.isValid}
        textInputConfig={{
          placeholder: "State/Region",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "state"),
          value: inputs["state"].value,
        }}
      />
      <Input
        label="City*"
        invalid={!inputs.city.isValid}
        textInputConfig={{
          placeholder: "City",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "city"),
          value: inputs["city"].value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check entered data
        </Text>
      )}
      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  button: {
    marginTop: 20,
    padding: 8,
  },
  errorText: {
    color: "red",
    margin: 8,
  },
});
