import {
  doc,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseInitial";

import { User, Users } from "@/types";

type AddUser = (userId: string, userData: User) => void;

export const addUser: AddUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData);
  } catch (e) {
    throw e;
  }
};

export const getAllUsers = async () => {
  try {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);

    const users = userSnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return users as Users;
  } catch (e) {
    throw e;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await deleteDoc(doc(db, "users", userId));
  } catch (e) {
    throw e;
  }
};

export const updateUser = async (data: User) => {
  try {
    await updateDoc(doc(db, "users", data.id), data);
  } catch (e) {
    throw e;
  }
};
