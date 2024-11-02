import { ProfileData } from "@/models/profile";
import axios from "axios";

const BACKEND_URL = "https://data-collection2-4cf7c-default-rtdb.europe-west1.firebasedatabase.app/"

export async function storeProfileData(formData: ProfileData, id?: string) {
    await axios.post(
        BACKEND_URL + '/profile.json',
        formData
    );    
}

export async function updateProfileData(formData: ProfileData, id: string) {
    await axios.put(
        BACKEND_URL + `/profile/${id}.json`,
        formData
    );    
    console.log('update')
}

export async function getProfileData(): Promise<ProfileData[]> {
    const response = await axios.get(BACKEND_URL + '/profile.json')
    const objects = [];
    for (const key in response.data) {
        const obj = {
            id: key,
            firstName: response.data[key].firstName,
            middleName: response.data[key].middleName,
            lastName: response.data[key].lastName,
            dateOfBirth: new Date(response.data[key].dateOfBirth)
        }
        objects.push(obj)
    }
    return objects
}