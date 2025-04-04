import { create } from "zustand";

import { User, Users } from "@/types";

interface IUsersStore {
  usersList: Users | null;
  selectedUser: User | null;
  selectedUserToView: User | null;
  uploading: boolean;
  setUsers: (users: Users) => void;
  setSelectedUser: (user: User) => void;
  setSelectedUserToView: (user: User) => void;
  setUploading: (status: boolean) => void;
}

export const useUsersStore = create<IUsersStore>((set) => ({
  usersList: null,
  selectedUser: null,
  selectedUserToView: null,
  uploading: false,
  setUsers: (users) => set(() => ({ usersList: [...users] })),
  setSelectedUser: (user) => set(() => ({ selectedUser: user })),
  setSelectedUserToView: (user) => set(() => ({ selectedUserToView: user })),
  setUploading: (status) => set(() => ({ uploading: status })),
}));
