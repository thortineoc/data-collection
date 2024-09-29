import { ProfileData } from "@/models/profile";
import { UserData } from "@/models/userData";
import { createContext, useReducer, useState } from "react";

export const UserDataContext = createContext({
  profile: {},
  address: {},
  employment: {},
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
  const [state, dispatch] = useReducer(userDataReducer, {});

  function setProfile(profileData: ProfileData) {
    dispatch({ type: "ADD_PROFILE", payload: profileData });
  }

  function setUserData(userData: UserData) {
    dispatch({ type: "SET_USER_DATA", payload: userData });
  }

  return (
    <UserDataContext.Provider value={state}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserDataContextProvider;
