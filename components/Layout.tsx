"use client";
import { useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import Login from "./Login";
import "../styles/tailwind.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= 3)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerClassName="!text-xs"
      />
      {isLoggedIn ? (
        children
      ) : (
        <Login onLoginSucess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default Layout;
