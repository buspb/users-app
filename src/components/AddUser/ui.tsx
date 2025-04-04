"use client";
import { useRouter } from "next/navigation";

export const AddUser = () => {
  const router = useRouter();
  return (
    <div className="w-full p-4 py-6 bg-gray-700 text-white rounded-md shadow-md shadow-gray-400">
      <h1 className="text-2xl font-medium">Добавьте нового пользователя</h1>
      <button
        className="border-2 text-md font-semibold rounded-sm mt-3 px-5 py-1 cursor-pointer"
        onClick={() => router.push("/create")}
      >
        Добавить
      </button>
    </div>
  );
};
