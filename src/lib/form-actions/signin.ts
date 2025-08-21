"use server";

import { signIn } from "../../auth";
import { redirect } from "next/navigation";

export const signin = async (formdata: FormData) => {
  await signIn("resend", formdata);
  redirect("/dashboard");
};
