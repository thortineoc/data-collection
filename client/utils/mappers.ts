import { AddressData } from "@/models/address";
import { EmploymentData } from "@/models/employment";
import { ProfileData } from "@/models/profile";

export function mapProfile(profile: ProfileData): ProfileData | undefined {
    const firstKey = Object.keys(profile)[0];
    if (!firstKey) {
        return undefined;
    }
    const profileData = profile[firstKey];
    return {
        id: firstKey,
        firstName: profileData.firstName,
        middleName: profileData.middleName,
        lastName: profileData.lastName,
        dateOfBirth: new Date(profileData.dateOfBirth)
    };
}


export function mapAddress(address: AddressData): AddressData | undefined {
    const firstKey = Object.keys(address)[0];
    if (!firstKey) {
        return undefined;
    }
    const addressData = address[firstKey];
    return {
        id: firstKey,
        address: addressData.address,
        zip: addressData.zip,
        country: addressData.country,
        state: addressData.state,
        city: addressData.city
    };
}


export function mapEmployment(employment: EmploymentData): EmploymentData | undefined {
    const firstKey = Object.keys(employment)[0];
    if (!firstKey) {
        return undefined;
    }
    const employmentData = employment[firstKey];

    return {
        id: firstKey,
        workplace: employmentData.workplace,
        jobTitle: employmentData.jobTitle,
    };
}
