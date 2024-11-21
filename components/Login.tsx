"use client";
import { Icon } from "@iconify/react";
import axios from "axios";
import NextLink from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import TeleCloudLogo from "./TeleCloudLogo";

const Login = ({ onLoginSucess }: { onLoginSucess: () => void }) => {
  const [botToken, setBotToken] = useState<string>("");
  const [isLogging, setIsLogging] = useState<boolean>(false);

  const handleLogin = async () => {
    setIsLogging(true);
    try {
      await axios.post("/api/verify-bot", {
        botToken,
      });
      toast.success("Logged in successfully");
      onLoginSucess();
    } catch (err: any) {
      toast.error(err.response.data.message);
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <TeleCloudLogo />
      {/* <h1 className="text-primary text-3xl font-semibold">TeleCloud</h1> */}
      <input
        type="text"
        value={botToken}
        onChange={(e) => setBotToken(e.target.value)}
        placeholder="Your bot token"
        className="text-sm w-full max-w-sm mt-6"
      />
      <button
        className="mt-5 flex items-center gap-2 px-6"
        onClick={handleLogin}
        disabled={!botToken || isLogging}
      >
        {isLogging ? <Icon icon="line-md:loading-loop" /> : null}
        Login
      </button>
      <NextLink href="#" className="text-primary underline text-xs mt-2.5">
        How to get bot token?
      </NextLink>
    </main>
  );
};

export default Login;
