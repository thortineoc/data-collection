import { AddressData } from "./address";
import { EmploymentData } from "./employment";
import { ProfileData } from "./profile";

export interface ResponseData {
    profile: ProfileData,
    address: AddressData,
    employment: EmploymentData,
}