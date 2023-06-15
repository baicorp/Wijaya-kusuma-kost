import React from "react";
import ListRoom from "./ListRoom";
import AddRoom from "./AddKamar";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata = {
  title: "Tipe Kamar",
};

async function page() {
  const supabase = createServerComponentClient({ cookies });
  let {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session !== null) {
    if (session.user.id !== "25fa9c8e-541e-4e82-9f72-c05602031382") {
      redirect("/profile");
    }
  } else {
    redirect("/");
  }
  return (
    <div className="h-[calc(100vh-61.333px)] p-2 text-white px-6 mx-auto max-w-[1200px]">
      <div className="flex justify-between items-center mt-6 mb-4">
        <p className="text-xl font-bold mb-4">Tipe Kamar</p>
        <AddRoom />
      </div>
      <table className="text-[##fffaff] border-[6px] border-black border-spacing-0 border-separate rounded-lg w-full">
        <thead>
          <tr className="bg-black text-left">
            <th className="p-2">No.</th>
            <th className="p-2">Tipe Kamar</th>
            <th className="p-2">Harga Kamar</th>
            <th className="p-2">Jumlah Kamar</th>
          </tr>
        </thead>
        <tbody>
          <ListRoom />
        </tbody>
      </table>
    </div>
  );
}

export default page;
