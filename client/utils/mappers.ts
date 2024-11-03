import { AddressData } from "@/models/address";
import { EmploymentData } from "@/models/employment";
import { ProfileData } from "@/models/profile";

export function mapProfile(profile: ProfileData): ProfileData {
    let object: any = undefined;
    for (const key in profile) {
        const obj = {
            id: key,
            firstName: profile[key].firstName,
            middleName: profile[key].middleName,
            lastName: profile[key].lastName,
            dateOfBirth: new Date(profile[key].dateOfBirth)
        }
        object = obj;
    }
    return object;
}

export function mapAddress(address: AddressData): AddressData {
    let object: any = undefined;
    for (const key in address) {
        const obj = {
            id: key,
            address: address[key].address,
            zip: address[key].zip,
            country: address[key].country,
            state: address[key].state,
            city: address[key].city
        }
        object = obj;
    }
    return object;
}

export function mapEmployment(employment: EmploymentData): EmploymentData {
    let object: any = undefined;
    for (const key in employment) {
        const obj = {
            id: key,
            workplace: employment[key].workplace,
            jobTitle: employment[key].jobTitle,
        }
        object = obj;
    }
    return object;
}