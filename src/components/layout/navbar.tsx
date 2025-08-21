import CustomLink from "../ui/custom-link";
import Link from "next/link";
const Navbar = async () => {
  return (
    <nav className="bg-[#fff7ed] text-[#f97316] font-bold text-2xl flex justify-between items-center p-4 fixed w-full shadow-md border-b border-[#e5e7eb] z-50">
      <Link href={"/"} className="">
        Task Manager
      </Link>
      <div>
        <CustomLink
          name="Sign In"
          link={"/signin"}
          className=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
