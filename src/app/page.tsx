"use client";
import { useEffect } from "react";

import { getAllUsers } from "@/api/Users";
import { useUsersStore } from "@/stores/usersStore";

import { AddUser } from "@/components/AddUser";
import { UsersList } from "@/components/UsersList";
import { Spinner } from "@/components/Spinner";
import { EmptyList } from "@/components/EmptyList";

export default function Home() {
  const setUsers = useUsersStore((state) => state.setUsers);
  const usersList = useUsersStore((state) => state.usersList);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const spinner = !usersList && (
    <div className="w-full h-[325px] flex items-center justify-center">
      <Spinner />
    </div>
  );
  const empty = usersList?.length === 0 && !spinner && (
    <div className="w-full h-[325px] flex items-center justify-center">
      <EmptyList />
    </div>
  );
  const content = usersList?.length !== 0 && !spinner && (
    <div className="w-full h-[325px] overflow-y-scroll flex flex-col items-center">
      <UsersList data={usersList} />
    </div>
  );

  return (
    <div className="min-w-4xl flex flex-col items-center gap-5">
      <div className="w-full p-4 py-6 bg-gray-700 text-white rounded-md shadow shadow-gray-400">
        <h1 className="text-2xl font-medium">Список пользователей</h1>
      </div>
      {spinner}
      {empty}
      {content}
      <AddUser />
    </div>
  );
}
