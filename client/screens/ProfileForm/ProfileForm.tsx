import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import Input from "@/components/Input/Input";
import { storeProfileData, updateProfileData } from "@/services/httpService";
import { UserDataContext } from "@/store/userData.context";
import { ProfileData } from "@/models/profile";
import { mapDate } from "@/utils/dateUtils";
import { Loader } from "@/components/Loader/Loader";

export default function ProfileForm({ navigation }) {
  const userDataCtx = useContext(UserDataContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasProfileData = !!userDataCtx.profile;

  useEffect(() => {
    if (hasProfileData) {
      setInputs({
        firstName: {
          value: userDataCtx.profile?.firstName || "",
          isValid: true,
        },
        middleName: {
          value: userDataCtx.profile?.middleName || "",
          isValid: true,
        },
        lastName: {
          value: userDataCtx.profile?.lastName || "",
          isValid: true,
        },
        dateOfBirth: {
          value: mapDate(userDataCtx.profile?.dateOfBirth) || "",
          isValid: true,
        },
      });
    }
  }, []);

  const [inputs, setInputs] = useState({
    firstName: { value: "", isValid: true },
    middleName: { value: "", isValid: true },
    lastName: { value: "", isValid: true },
    dateOfBirth: { value: "", isValid: true },
  });

  const formIsInvalid =
    !inputs.firstName.isValid ||
    !inputs.lastName.isValid ||
    !inputs.dateOfBirth.isValid;

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
      firstName: inputs.firstName.value,
      middleName: inputs.middleName.value,
      lastName: inputs.lastName.value,
      dateOfBirth: new Date(inputs.dateOfBirth.value),
    };

    const isFirstNameValid = formData.firstName.trim().length > 0;
    const isLastNameValid = formData.lastName.trim().length > 0;
    const isDateOfBirthValid =
      formData.dateOfBirth.toString() !== "Invalid Date";

    if (!isFirstNameValid || !isLastNameValid || !isDateOfBirthValid) {
      setInputs((currInputs) => {
        return {
          firstName: {
            value: currInputs.firstName.value,
            isValid: isFirstNameValid,
          },
          middleName: {
            value: currInputs.middleName.value,
            isValid: true,
          },
          lastName: {
            value: currInputs.lastName.value,
            isValid: isLastNameValid,
          },
          dateOfBirth: {
            value: currInputs.dateOfBirth.value,
            isValid: isDateOfBirthValid,
          },
        };
      });
      return;
    }

    setIsSubmitting(true);
    if (userDataCtx?.profile?.id) {
      await updateProfileData(formData, userDataCtx.profile.id);
    } else {
      await storeProfileData(formData);
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
        label="First name*"
        invalid={!inputs.firstName.isValid}
        textInputConfig={{
          placeholder: "First name",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "firstName"),
          value: inputs["firstName"].value,
        }}
      />
      <Input
        label="Middle name"
        invalid={!inputs.middleName.isValid}
        textInputConfig={{
          placeholder: "Middle name",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "middleName"),
          value: inputs["middleName"].value,
        }}
      />
      <Input
        label="Last name*"
        invalid={!inputs.lastName.isValid}
        textInputConfig={{
          placeholder: "Last name",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "lastName"),
          value: inputs["lastName"].value,
        }}
      />
      <Input
        label="Date of birth*"
        invalid={!inputs.dateOfBirth.isValid}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "dateOfBirth"),
          value: inputs["dateOfBirth"].value,
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
