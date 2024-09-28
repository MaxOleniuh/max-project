"use client";
import { useState } from "react";
import { signInFrow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<signInFrow>("signIn");

  return (
    <div className="h-[100vh] flex justify-center items-center bg-violet-800">
      <div className="md:h-auto">
        {state === "signIn" ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
};
