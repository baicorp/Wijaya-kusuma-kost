import React from "react";
import supabase from "@/utils/supabase";
import List from "./listBantuan";

export const metadata = {
  title: "Bantuan",
};

async function page() {
  let { data: FAQ, error: errorFaq } = await supabase.from("FAQ").select("*");

  if (!FAQ) {
    console.log("something off");
  }

  return (
    <main className="px-4">
      <h1 className="text-center font-bold text-2xl my-4">Butuh bantuan?</h1>
      <section className="px-10 py-4 mx-auto shadow rounded-2xl divide-y-2 shadow-slate-400 max-w-5xl">
        {FAQ?.map((datas) => {
          return (
            <List key={datas.id} title={datas.title} content={datas.content} />
          );
        })}
      </section>
    </main>
  );
}

export default page;
