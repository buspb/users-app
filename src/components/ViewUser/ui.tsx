import { useUsersStore } from "@/stores/usersStore";

export const ViewUser = () => {
  const selectedUserToView = useUsersStore((state) => state.selectedUserToView);

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-[90%] flex items-center gap-3 justify-between">
        <p className="font-semibold">Имя:</p>
        <p className="w-[80%] bg-gray-100 rounded-md px-4 py-2">
          {selectedUserToView?.name}
        </p>
      </div>
      <div className="w-[90%] flex items-center gap-3 justify-between">
        <p className="font-semibold">Email:</p>
        <p className="w-[80%] bg-gray-100 rounded-md px-4 py-2">
          {selectedUserToView?.email}
        </p>
      </div>
      <div className="w-[90%] flex items-center gap-3 justify-between">
        <p className="font-semibold">Возраст:</p>
        <p className="w-[80%] bg-gray-100 rounded-md px-4 py-2">
          {selectedUserToView?.age}
        </p>
      </div>
    </div>
  );
};
