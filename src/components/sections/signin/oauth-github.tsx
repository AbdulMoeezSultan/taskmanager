"use client";

import { signIn } from "next-auth/react";

const OAuthGithub = () => {
  const signInGitHub = async () => {
    await signIn("github", {
      callbackUrl: "/dashboard",
    });
  };
  return (
    <button
      onClick={signInGitHub}
      className="w-full flex items-center justify-center gap-2 bg-[#f97316] text-white py-2 rounded hover:bg-[#ea580c] transition"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.76-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.311.47-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.004-.404c1.018.005 2.045.137 3.004.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.222 0 4.61-2.804 5.625-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z"
          clipRule="evenodd"
        />
      </svg>
      Sign in with GitHub
    </button>
  );
};

export default OAuthGithub;
