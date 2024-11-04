import { Button, Text, View, StyleSheet, Alert, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

export default function DocumentForm() {
  const [image, setImage] = useState();

  const [cameraPermissionInformation, requestPersmission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permisssionResponse = await requestPersmission();
      return permisssionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app"
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [9, 16],
      quality: 0.5,
    });
    console.log(image.assets[0].uri);
    setImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upload photo of the document</Text>
      <Button title="Upload" onPress={takeImageHandler} />
      <View style={styles.imageContainer}>{imagePreview}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    paddingHorizontal: 6,
  },
  header: {
    fontSize: 18,
    marginBottom: 30,
  },
  imageContainer: {
    width: 180,
    height: 320,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    alignSelf: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
