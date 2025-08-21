import Link from "next/link";
import SignOut from "@/components/sections/navbar/sign-out";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
const DashboardNavbar = async () => {
  const session = await auth();
  if (!session) notFound();
  return (
    <nav className="bg-transparent backdrop-blur-xs text-[#f97316] font-bold text-2xl flex justify-between items-center p-4 fixed w-full top-0 z-10 shadow-md border-b border-[#e5e7eb]">
      <Link href={"/dashboard"}>Task Manager</Link>
      <div className="flex gap-4 items-center">
        <Link href="/dashboard" className="hover:text-[#ea580c] transition">
          Blogs
        </Link>
        <Link href={"/dashboard/create-blog"} className="hover:text-[#ea580c] transition">Create Blog</Link>
        <SignOut />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
