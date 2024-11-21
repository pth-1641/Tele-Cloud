import type { Metadata } from "next";
import Layout from "./components/Layout";
import "./styles/tailwind.css";

export const metadata: Metadata = {
  title: "TeleCloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
