import { signin } from "@/lib/form-actions/signin";

const MagicLinkResend = () => {
  return (
    <form action={signin} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="w-full p-3 rounded bg-[#fff7ed] text-[#1f2937] border border-[#e5e7eb] focus:outline-none focus:border-[#f97316] placeholder:text-[#6b7280]"
      />
      <button
        type="submit"
        className="w-full bg-[#f97316] text-white py-2 rounded hover:bg-[#ea580c] transition"
      >
        Send Magic Link
      </button>
    </form>
  );
};

export default MagicLinkResend;
