import { AddMenuForm } from "@/components/AddMenuForm";
import { createMenuAction } from "@/actions/create-menu";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <AddMenuForm action={createMenuAction} />
    </div>
  );
}
