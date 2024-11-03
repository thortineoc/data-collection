import { AddressData } from "@/models/address";
import { EmploymentData } from "@/models/employment";
import { ProfileData } from "@/models/profile";
import axios from "axios";

const BACKEND_URL = "https://data-collection2-4cf7c-default-rtdb.europe-west1.firebasedatabase.app/"

export function storeProfileData(formData: ProfileData) {
    return axios.post(
        BACKEND_URL + '/profile.json',
        formData
    );    
}

export function updateProfileData(formData: ProfileData, id: string) {
    return axios.put(
        BACKEND_URL + `/profile/${id}.json`,
        formData
    );    
}

export function storeAddressData(formData: AddressData) {
    return axios.post(
        BACKEND_URL + '/address.json',
        formData
    );    
}

export function updateAddressData(formData: AddressData, id: string) {
    return axios.put(
        BACKEND_URL + `/address/${id}.json`,
        formData
    );    
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