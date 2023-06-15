"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

function SignOut() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.replace("/login");
  };

  return (
    <li>
      <button
        className="text-black p-2 rounded-md font-bold bg-white"
        onClick={handleSignOut}
      >
        SignOut
      </button>
    </li>
  );
}

export default SignOut;
