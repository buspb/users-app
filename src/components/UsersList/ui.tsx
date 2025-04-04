"use client";
import { useRouter } from "next/navigation";

import { deleteUser, getAllUsers } from "@/api/Users";
import { useUsersStore } from "@/stores/usersStore";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { User, Users } from "@/types";

export const UsersList = ({ data }: { data: Users | null }) => {
  const router = useRouter();
  const setUsers = useUsersStore((state) => state.setUsers);
  const setSelectedUser = useUsersStore((state) => state.setSelectedUser);
  const setSelectedUserToView = useUsersStore(
    (state) => state.setSelectedUserToView
  );

  const onSelectUserToView = (user: User) => {
    setSelectedUserToView(user);
    router.push(`/user/${user.id}`);
  };

  const onDeleteUser = async (userId: string) => {
    await deleteUser(userId);
    const data = await getAllUsers();
    setUsers(data);
  };

  const onEditUser = (user: User) => {
    setSelectedUser(user);
    router.push(`/edit/${user.id}`);
  };

  const usersList = data?.map((user, i) => {
    return (
      <div
        className="w-full grid grid-cols-[1fr_1fr_0.5fr_0.2fr] p-4 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.15)]"
        key={i}
      >
        <p className="cursor-pointer" onClick={() => onSelectUserToView(user)}>
          {user.name}
        </p>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <div className="flex gap-2">
          <FaRegEdit
            className="w-7 h-7 cursor-pointer"
            onClick={() => onEditUser(user)}
          />
          <MdDeleteOutline
            className="w-7 h-7 fill-red-500 cursor-pointer"
            onClick={() => onDeleteUser(user.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="px-4 w-full grid grid-cols-[1fr_1fr_0.5fr_0.2fr] text-base">
        <p className="font-medium">Имя</p>
        <p className="font-medium">Email</p>
        <p className="font-medium">Возраст</p>
      </div>
      {usersList}
    </>
  );
};
