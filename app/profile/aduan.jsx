"use client";
import React from "react";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Aduan({ id }) {
  const [masukan, setMasukan] = useState("");
  const [placeholder, setPlaceHolder] = useState("");
  const [isSent, setIsSent] = useState(false);
  const supabase = createClientComponentClient();

  const sendComplain = async (e) => {
    e.preventDefault();
    if (!masukan) {
      setPlaceHolder("Input tidak boleh kosong");
      return;
    }
    const { data, error } = await supabase
      .from("Complain")
      .insert([{ complain_text: masukan, member_id: id }]);
    if (true) {
      setMasukan("");
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
      setIsSent(true);
    }
  };
  return (
    <div>
      <div className="flex flex-col space-y-4 text-gray-950 max-w-sm md:mt-10">
        <label htmlFor="complain" className="font-bold">
          Kirim masukan
        </label>
        <input
          type="text"
          id="complain"
          className="placeholder:text-red-600 border border-gray-800 p-2 focus:outline-none break-all"
          onChange={(e) => {
            setMasukan(e.target.value);
          }}
          value={masukan}
          placeholder={placeholder}
        />
        <button
          className="text-white p-2 rounded-md bg-gray-950"
          onClick={sendComplain}
        >
          Kirim
        </button>
      </div>
      {isSent && (
        <div className="mt-2 w-max text-center text-white font-bold rounded-lg p-2 bg-green-500">
          berhasil mengirimkan masukan{" "}
        </div>
      )}
    </div>
  );
}
