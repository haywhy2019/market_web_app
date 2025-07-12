import { SignUpView } from "@/modules/auth/views/signUpView";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const session = await caller.auth.session();
  if (session.user) {
    redirect("/");
  }
  return <SignUpView />;
}

export default Page;
