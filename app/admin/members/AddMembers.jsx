"use client";

import React from "react";
import { useState, useRef } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function AddMembers({ children }) {
  const [showModal, setShowModal] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const modalRef = useRef(null);

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
    // const {
    //   person_name,
    //   phone_number,
    //   room_type_id,
    //   start_date,
    //   end_date,
    //   email,
    //   password,
    // } = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(email, password);
    // console.log("hello");
    // await supabase.auth.signUp({
    //   email: "jon@example.com",
    //   password: "sup3rs3cur3",
    // });
    // const { data, error } = await supabase.from("Members").insert([
    //   {
    //     id: user.id,
    //     person_name: person_name,
    //     phone_number: phone_number,
    //     room_type_id: room_type_id,
    //     start_date: start_date,
    //     end_date: end_date,
    //     email: email,
    //     password: password,
    //   },
    // ]);

    // if (!error) {
    //   handleClose();
    //   router.refresh();
    // }
  };

  return (
    <>
      <button
        className="bg-white text-black p-2 rounded-md"
        onClick={handleClose}
      >
        Tambah Anggota
      </button>

      <dialog
        ref={modalRef}
        className="rounded-lg bg-black text-white p-8 space-y-4"
      >
        <p className="font-bold text-center">Tambah Anggota</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="text"
            required
            placeholder="Nama"
            name="person_name"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="text"
            pattern="[0-9]+"
            title="Hanya masukkan nomor telfon"
            required
            placeholder="nomor hp"
            name="phone_number"
          />
          <select
            name="room_type_id"
            required
            className="outline outline-1 p-3 rounded-md bg-transparent outline-gray-500 "
          >
            <option
              value="fa43838a-e609-40a1-9a38-2c33464281d3"
              className="text-black"
            >
              Tipe A
            </option>

            <option
              value="979faa14-8805-40d8-91af-a94fb082ec75"
              className="text-black"
            >
              Tipe B
            </option>

            <option
              value="7438360c-5c20-486d-a9d4-30ef4301704b"
              className="text-black"
            >
              Tipe C
            </option>
          </select>
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="date"
            required
            name="start_date"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="date"
            required
            name="end_date"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <input
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
            type="password"
            required
            placeholder="Password"
            name="password"
          />
          <div className="flex justify-between gap-2">
            <button
              type="reset"
              className="flex-1 bg-white text-black p-2 rounded-md"
              onClick={handleClose}
            >
              Batal
            </button>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-[#0070f3] text-white p-3 rounded-md font-[500] hover:bg-transparent hover:text-[#0070f3] hover:outline hover:outline-1 hover:outline-[#0070f3]"
          type="sumbit"
        >
          Tambah
        </button>
      </dialog>
    </>
  );
}

export default AddMembers;
