"use client";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - Cherify";
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <span className="text-white text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen  px-2">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-8 w-full max-w-xs sm:max-w-md flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">Login to Cherify</h1>
        <p className="text-white/80 mb-6 md:mb-8 text-center text-sm md:text-base">
          Sign in to access your dashboard and start your crowdfunding journey!
        </p>
        <button
          onClick={() => signIn("github")}
          className="flex items-center w-full justify-center bg-black text-white rounded-lg px-4 md:px-6 py-2 md:py-3 mb-3 md:mb-4 hover:bg-gray-900 transition font-semibold shadow text-sm md:text-base"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          Continue with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="flex items-center w-full justify-center bg-white text-black rounded-lg px-4 md:px-6 py-2 md:py-3 mb-2 hover:bg-gray-100 transition font-semibold shadow text-sm md:text-base"
        >
          <svg className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.1 29.6 4 24 4c-7.1 0-13.2 3.1-17.7 8.1z"/>
              <path fill="#FBBC05" d="M24 44c5.2 0 10-1.7 13.7-4.7l-6.4-5.2C29.9 36.1 27.1 37 24 37c-6.1 0-11.3-4.1-13.1-9.6l-7 5.4C7.8 40.2 15.3 44 24 44z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.1 5.5-7.7 5.5-4.7 0-8.6-3.8-8.6-8.5s3.9-8.5 8.6-8.5c2.5 0 4.7.9 6.3 2.4l6.1-6.1C38.1 9.1 31.6 6 24 6c-8.7 0-16.2 3.8-21.1 9.7l7 5.1C8.7 16.1 15.5 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.1 29.6 4 24 4c-7.1 0-13.2 3.1-17.7 8.1z"/>
            </g>
          </svg>
          Continue with Google
        </button>
        <p className="text-xs md:text-sm text-white/60 mt-5 md:mt-6 text-center">
          By continuing, you agree to our <a href="/terms" className="underline hover:text-blue-200">Terms of Service</a> and <a href="/privacy" className="underline hover:text-blue-200">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;