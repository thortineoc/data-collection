import { AddressData } from "@/models/address";
import { EmploymentData } from "@/models/employment";
import { ProfileData } from "@/models/profile";
import { ResponseData } from "@/models/response";
import { mapAddress, mapEmployment, mapProfile } from "@/utils/mappers";
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

export function storeEmploymentData(formData: EmploymentData) {
    return axios.post(
        BACKEND_URL + '/employment.json',
        formData
    );    
}

export function updateEmploymentData(formData: EmploymentData, id: string) {
    return axios.put(
        BACKEND_URL + `/employment/${id}.json`,
        formData
    );    
}

export async function getAllData(): Promise<ResponseData> {
    const responseProfile = await (await axios.get(BACKEND_URL + '/profile.json')).data
    const responseAddress = await (await axios.get(BACKEND_URL + '/address.json')).data
    const responseEmployment = await (await axios.get(BACKEND_URL + '/employment.json')).data

    const result = {
        profile: mapProfile(responseProfile),
        address: mapAddress(responseAddress),
        employment: mapEmployment(responseEmployment)
    }
   
    return result;
}