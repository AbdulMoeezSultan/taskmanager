import MagicLinkResend from "./magiclink-resend";
import OAuthGithub from "./oauth-github";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
      <div className="p-8 bg-[#fafafa] shadow-2xl rounded-3xl space-y-6 border border-[#e5e7eb]">
        <h2 className="text-2xl font-bold text-center text-[#f97316]">Sign in</h2>

        {/* Magic Link Form */}
        <MagicLinkResend />

        <div className="flex items-center justify-between gap-2">
          <hr className="w-full border-[#e5e7eb]" />
          <span className="text-[#f97316] text-sm">OR</span>
          <hr className="w-full border-[#e5e7eb]" />
        </div>

        <OAuthGithub />
      </div>
    </div>
  );
}
