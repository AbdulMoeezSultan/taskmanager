import { auth } from "@/auth";
import Navbar from "@/components/layout/navbar";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <>
      <SessionProvider session={session}>
  <Navbar />
  <div className="pt-18 bg-[#ffffff]">{children}</div>
      </SessionProvider>
    </>
  );
}
