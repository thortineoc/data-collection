import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import { useState } from "react";
import Input from "@/components/Input/Input";

export default function EmploymentForm(this: any) {
  const [inputs, setInputs] = useState({
    workplace: { value: "", isValid: true },
    jobTitle: { value: "", isValid: true },
  });

  const formIsInvalid = !inputs.workplace.isValid || !inputs.jobTitle.isValid;

  function inputChangedHandler(inputId: string, enteredValue: string) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputId]: { value: enteredValue, isValid: true },
      };
    });
  }

  function handleSubmit() {
    const formData = {
      workplace: inputs.workplace.value,
      jobTitle: inputs.jobTitle.value,
    };

    const isWorkplaceValid = formData.workplace.trim().length > 0;
    const isJobTitleValid = formData.jobTitle.trim().length > 0;

    if (!isWorkplaceValid || !isJobTitleValid) {
      setInputs((currInputs) => {
        return {
          workplace: {
            value: currInputs.workplace.value,
            isValid: isWorkplaceValid,
          },
          jobTitle: {
            value: currInputs.jobTitle.value,
            isValid: isJobTitleValid,
          },
        };
      });
      return;
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Input
        label="Workplace*"
        invalid={!inputs.workplace.isValid}
        textInputConfig={{
          placeholder: "Workplace",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "workplace"),
          value: inputs["workplace"].value,
        }}
      />
      <Input
        label="Job title*"
        invalid={!inputs.jobTitle.isValid}
        textInputConfig={{
          placeholder: "Job title",
          autoCapitalize: "none",
          autoCorrect: false,
          onChangeText: inputChangedHandler.bind(this, "jobTitle"),
          value: inputs["jobTitle"].value,
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
