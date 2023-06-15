import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

async function ListComplain() {
  const supabase = createServerComponentClient({ cookies });

  const { data: complainData, error } = await supabase
    .from("Complain")
    .select();
  if (!complainData) {
    console.log("something off");
    redirect("/admin/aduan");
  }

  return (
    <>
      {complainData?.map((data, index) => {
        const date = new Date(data.created_at);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString("en-US", {
          hour12: false,
        });
        return (
          <tr key={data.id}>
            <td className="p-3 border-t-[6px] border-black">{index + 1}</td>
            <td className="p-3 border-t-[6px] border-black">
              {data.complain_text}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {formattedTime + " | " + formattedDate}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ListComplain;
