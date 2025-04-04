"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { updateUser } from "@/api/Users";
import { useUsersStore } from "@/stores/usersStore";
import { Spinner } from "../Spinner";
import { User } from "@/types";

export const EditUserForm = () => {
  const selectedUser = useUsersStore((state) => state.selectedUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      name: selectedUser?.name,
      email: selectedUser?.email,
      age: selectedUser?.age,
    },
  });
  const router = useRouter();
  const uploading = useUsersStore((state) => state.uploading);
  const setUploading = useUsersStore((state) => state.setUploading);
  const onSubmit = async (data: User) => {
    setUploading(true);
    await updateUser({
      ...data,
      id: selectedUser!.id,
    });
    router.push("/");
    setUploading(false);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: true })}
        className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-0"
        type="text"
        placeholder="Имя"
      />
      {errors.name && <span className="text-red-500">Поле обязательно</span>}
      <input
        {...register("email", { required: true })}
        className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-0"
        type="email"
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-500">Введите корректный email</span>
      )}
      <input
        {...register("age", { required: true })}
        className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-0"
        type="number"
        placeholder="Возраст"
      />
      {errors.age && <span className="text-red-500">Поле обязательно</span>}
      <button
        type="submit"
        className="flex justify-center items-center bg-gray-700 text-white text-xl font-semibold rounded-md px-10 py-2 mt-3 cursor-pointer"
        disabled={uploading ? true : false}
      >
        {uploading ? <Spinner /> : "Сохранить"}
      </button>
    </form>
  );
};
