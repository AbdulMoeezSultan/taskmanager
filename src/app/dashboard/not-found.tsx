import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fff] text-[#1f2937] font-sans flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#f97316] mb-4">404</h1>
        <p className="text-xl text-[#6b7280] mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href={"/"}
          className="inline-block bg-[#f97316] text-white px-6 py-2 rounded font-semibold hover:bg-[#ea580c] transition"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
