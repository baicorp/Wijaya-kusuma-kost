"use client";

import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const supabase = createClientComponentClient();
  const [errorState, setErrorState] = useState({
    errorMessage: "",
    errStatus: false,
  });

  async function handleSignIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      setLoader(true);
      router.refresh();
      router.replace("/profile");
    } else {
      setTimeout(() => {
        setErrorState((prev) => {
          return {
            ...prev,
            errStatus: !prev.errStatus,
          };
        });
      }, 2000);
      setErrorState((prev) => {
        return {
          ...prev,
          errorMessage: error.message,
          errStatus: !prev.errStatus,
        };
      });
    }
  }

  return (
    <main className="bg-black">
      <div className="h-[calc(100vh-82px)] flex flex-col justify-center items-center space-y-10">
        <h1 className="text-3xl text-white text-center font-bold tracking-[-0.73px]">
          Login Wijaya Kusuma
        </h1>
        <div className="flex flex-col space-y-3 w-[320px]">
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Username"
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
          />
          <input
            required
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
            className="outline outline-1 p-3 rounded-md outline-gray-500 bg-transparent text-white"
          />
          <button
            className="bg-[#0070f3] text-white p-3 rounded-md font-[500] hover:bg-transparent hover:text-[#0070f3] hover:outline hover:outline-1 hover:outline-[#0070f3]"
            onClick={handleSignIn}
          >
            Login
          </button>
        </div>
      </div>
      <div
        className={`bg-red-500 text-white rounded-lg p-6 fixed bottom-4 right-4 duration-300 ${
          errorState.errStatus ? "" : "translate-y-[100px]"
        }`}
      >
        <p>{errorState.errorMessage}</p>
      </div>
      {loader && (
        <div className="absolute top-0 w-full h-screen">
          <div className=" bg-black">
            <Image
              src={"/loader.svg"}
              width={50}
              height={50}
              alt="loader"
              className="absolute top-1/2 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Page;
