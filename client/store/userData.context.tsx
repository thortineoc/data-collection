import { AddressData } from "@/models/address";
import { EmploymentData } from "@/models/employment";
import { ProfileData } from "@/models/profile";
import { UserData } from "@/models/userData";
import { createContext, useReducer, useState } from "react";

export const UserDataContext = createContext<{
  profile?: ProfileData;
  address?: AddressData;
  employment?: EmploymentData;
  setProfile: (profileData: ProfileData) => any;
  setUserData: (userData: UserData) => any;
}>({
  profile: undefined,
  address: undefined,
  employment: undefined,
  setProfile: (profileData: ProfileData) => {},
  setUserData: (userData: UserData) => {},
});

function userDataReducer(state, action) {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, profile: { ...action.payload } };
    case "SET_ADDRESS":
    case "SET_EMPLOYMENT":
    case "SET_USER_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function UserDataContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(userDataReducer, {
    profile: null,
    address: null,
    employment: null,
  });

  function setProfile(profileData: ProfileData) {
    dispatch({ type: "ADD_PROFILE", payload: profileData });
  }

  function setUserData(userData: UserData) {
    dispatch({ type: "SET_USER_DATA", payload: userData });
  }

  const value = {
    profile: state.profile,
    address: state.address,
    employment: state.employment,
    setProfile: setProfile,
    setUserData: setUserData,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContextProvider;
