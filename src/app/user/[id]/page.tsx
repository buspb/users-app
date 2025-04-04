"use client";
import { ViewUser } from "@/components/ViewUser";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function UserDetails() {
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
          Информация о пользователе
        </h1>
        <ViewUser />
      </div>
    </div>
  );
}
