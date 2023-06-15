"use client";

import React from "react";
import { useState, useRef } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function AddRoom({ children }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  const modalRef = useRef(null);
  const supabase = createClientComponentClient();

  const handleClose = () => {
    setShowModal((old) => !old);
    const dialog = modalRef.current;
    if (showModal) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { tipe_kamar, harga_kamar, jumlah_kamar } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    const { data, error } = await supabase.from("Kamar").insert([
      {
        tipe_kamar: tipe_kamar,
        harga_kamar: harga_kamar,
        jumlah_kamar: jumlah_kamar,
      },
    ]);
    if (!error) {
      handleClose();
      router.refresh();
    }
  };

  return (
    <>
      <button
        className="bg-white text-black p-2 rounded-md"
        onClick={handleClose}
      >
        Tambah Kamar
      </button>

      <dialog
        ref={modalRef}
        className="rounded-lg bg-black text-white p-8 space-y-4"
      >
        <p className="font-bold text-center">Tambah kamar</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="text"
            required
            placeholder="Tipe kamar"
            name="tipe_kamar"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="text"
            pattern="[0-9]+"
            required
            placeholder="Harga kamar"
            name="harga_kamar"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="text"
            pattern="[0-9]+"
            required
            placeholder="Jumlah kamar"
            name="jumlah_kamar"
          />

          <div className="flex justify-between gap-2">
            <button
              type="reset"
              className="flex-1 bg-white text-black p-2 rounded-md"
              onClick={handleClose}
            >
              Batal
            </button>
            <button
              onSubmit={handleSubmit}
              className="flex-1 bg-[#0070f3] text-white p-3 rounded-md font-[500] hover:bg-transparent hover:text-[#0070f3] hover:outline hover:outline-1 hover:outline-[#0070f3]"
              type="sumbit"
            >
              Tambah
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default AddRoom;
