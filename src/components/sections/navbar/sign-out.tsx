"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const routor = useRouter();
  const signout = async () => {
    await signOut();
    routor.push("/");
  };
  return (
    <button
      onClick={signout}
      className="bg-[#f97316] text-white px-5 py-2 rounded hover:bg-[#ea580c] transition"
    >
      Sign out
    </button>
  );
};

export default SignOut;
