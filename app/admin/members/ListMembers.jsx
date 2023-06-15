import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function ListMembers() {
  const supabase = createServerComponentClient({ cookies });

  let { data, error } = await supabase
    .from("Members")
    .select(
      `person_name,
      phone_number,
      Kamar:room_type_id (tipe_kamar),
      start_date,
      end_date,
      status`
    )
    .eq("status", "USER");

  return (
    <>
      {data?.map((data, index) => {
        return (
          <tr key={index}>
            <td className="p-3 border-t-[6px] border-black">{index + 1}</td>
            <td className="p-3 border-t-[6px] border-black">
              {data.person_name}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {data.phone_number}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {data.Kamar.tipe_kamar}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {data.start_date}
            </td>
            <td className="p-3 border-t-[6px] border-black">{data.end_date}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ListMembers;
