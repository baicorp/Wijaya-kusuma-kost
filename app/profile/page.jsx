import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Aduan from "./aduan";

export const metadata = {
  title: "Profile",
};

async function Profile() {
  const supabase = createServerComponentClient({ cookies });
  let userProfile = [];
  let {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session !== null) {
    if (session.user.id === "25fa9c8e-541e-4e82-9f72-c05602031382")
      redirect("/admin/members");

    const { data, error: membersErr } = await supabase
      .from("Members")
      .select()
      .eq("id", session.user.id);
    userProfile = structuredClone(data);
  } else {
    redirect("/");
  }

  const {
    person_name,
    phone_number,
    start_date,
    end_date,
    room_type_id,
    status,
  } = {
    ...userProfile[0],
  };

  return (
    <main className="h-[calc(100vh-61.333px)] p-2 px-6 mx-auto max-w-[1200px]">
      <h1 className="text-xl font-bold mb-4">Hello, {person_name}</h1>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:flex-wrap">
        <div className="bg-gradient-to-bl from-[#656D77] to-[#2F363F] text-white rounded-lg p-8 flex flex-col items-center gap-4 md:flex-1 md:mr-8">
          <img
            className="border-4 border-gray-700 rounded-full"
            src={`https://api.dicebear.com/6.x/micah/svg?seed=${person_name}&mouth=smile`}
            width={128}
            height={128}
            alt="avatar"
          />
          <p className="text-lg font-bold">
            {person_name.charAt(0).toUpperCase() + person_name.slice(1)}
          </p>
          <p>{phone_number}</p>
        </div>
        <div className="bg-gradient-to-br from-[#656D77] to-[#2F363F] text-white rounded-lg p-8 md:flex-1">
          <p className="text-lg font-bold">Mulai Kost : {start_date}</p>
          <p className="text-lg font-bold">{`Selesai Kost : ${end_date}`}</p>
        </div>
        <div className="md:w-full ">
          <Aduan id={session.user.id} />
        </div>
      </div>
    </main>
  );
}

export default Profile;
