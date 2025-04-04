"use client";
import { EditUserForm } from "@/components/EditUserForm";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function EditUser() {
  const router = useRouter();

  const onGoBack = () => {
    router.push("/");
  };

  return (
    <div className="min-w-md gap-0">
      <IoIosArrowRoundBack
        onClick={onGoBack}
        className="w-12 h-12 cursor-pointer fill-gray-700"
      />
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-center text-gray-700 font-bold">
          Редактировать пользователя
        </h1>
        <EditUserForm />
      </div>
    </div>
  );
}
