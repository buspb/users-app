"use client";
import { AddUserForm } from "@/components/AddUserForm";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CreateUser() {
  const router = useRouter();

  return (
    <div className="min-w-md gap-0">
      <IoIosArrowRoundBack
        onClick={() => router.push("/")}
        className="w-12 mb-[-10px] h-12 cursor-pointer fill-gray-700"
      />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-center text-gray-700 font-bold">
          Добавить пользователя
        </h1>
        <AddUserForm />
      </div>
    </div>
  );
}
