import Link from "next/link";
import SignOut from "@/app/SignOut";
import Image from "next/image";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function Navbar() {
  const supabase = createServerComponentClient({ cookies });
  let isAdmin = false;

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session !== null) {
    if (session.user.id === "25fa9c8e-541e-4e82-9f72-c05602031382") {
      isAdmin = true;
    }
  }

  return (
    <nav className="bg-black flex p-4 items-center text-sm border-b border-gray-800">
      <div className="mr-auto">
        <Link href={isAdmin ? "/admin/members" : "/"}>
          <Image
            src={"/kost-icon.png"}
            width={100}
            height={100}
            alt="kost icon"
            className="w-24"
          />
        </Link>
      </div>
      <ul className="flex gap-6 items-center">
        <div className={isAdmin ? "hidden" : "block"}>
          <div className="flex gap-6">
            <li className="text-white">
              <Link href="/bantuan">Bantuan</Link>
            </li>
            {session && (
              <li className="text-white">
                <Link href="/profile">Profile</Link>
              </li>
            )}
          </div>
        </div>
        {session ? (
          <SignOut />
        ) : (
          <li>
            <Link
              href="/login"
              className=" text-black bg-white rounded-md px-4 py-2 hover:bg-black hover:text-white hover:outline hover:outline-1 hover:outline-white hover:border-white font-bold"
            >
              <button>LOGIN</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
