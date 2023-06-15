import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function ListRoom() {
  const supabase = createServerComponentClient({ cookies });

  let { data, error } = await supabase.from("Kamar").select("*");

  return (
    <>
      {data?.map((data, index) => {
        return (
          <tr key={data.id}>
            <td className="p-3 border-t-[6px] border-black">{index + 1}</td>
            <td className="p-3 border-t-[6px] border-black">
              {data.tipe_kamar}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {data.harga_kamar}
            </td>
            <td className="p-3 border-t-[6px] border-black">
              {data.jumlah_kamar}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ListRoom;
