import Link from "next/link";

const CustomLink = ({
  name,
  link,
  className,
}: {
  name: string;
  link: string;
  className: string;
}) => {
  return (
    <Link
      href={link}
  className={`bg-[#f97316] text-white px-5 py-2 rounded hover:bg-[#ea580c] transition ${className}`}
    >
      {name}
    </Link>
  );
};

export default CustomLink;
