import Image from "next/image";
import Link from "next/link";
import { inter } from "../fonts";

export default function login() {
  return (
    <div>
      <nav className="sticky w-full z-50 top-0 left-0 bg-white shadow-md">
        <div className="flex justify-between max-w-7xl mx-auto items-center w-full h-full px-4 py-3">
          <Link
            href="/"
            className="flex gap-2 justify-center items-center focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 hover:opacity-75 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="HelpMeOut Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p
              className={`${inter.className}text-2xl font-semibold tracking-wide text-primary-dark`}
            >
              HelpMeOut
            </p>
          </Link>
        </div>
      </nav>

      <div className="w-full h-full flex justify-center px-4 mx-auto mb-10">
        <div className="h-full w-full rounded-3xl bg-white items-center py-12 lg:h-[700px] lg:w-[500px]">
          <div className="mx-auto px-8 space-y-3 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold ">Log in or Sign Up</h1>
            <p className="pt-2 text-primary-grey text-lg">
              Join millions of others in sharing successful moves on{" "}
              <span className="text-[#434343]">HelpMeOut</span>.
            </p>
          </div>

          <div className="w-[90%] mx-8 p-4 space-y-3">
            <div className="w-full mx-auto p-4 flex justify-center items-center gap-2 border-2 rounded-md border-primary-black">
              <Image
                src="/google.svg"
                alt="google logo"
                width={24}
                height={24}
              />
              <p>Continue with Google</p>
            </div>
            <div className="w-full mx-auto p-4 flex justify-center items-center gap-2 border-2 rounded-md border-primary-black">
              <Image
                src="/facebook.svg"
                alt="facebook logo"
                width={24}
                height={24}
              />
              <p>Continue with Facebook</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-primary-grey">or</p>
            </div>
          </div>

          <form className="w-[90%] mx-8 p-3">
            <div className="flex flex-col">
              <label className="text-xs text-primary-black" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-2 w-full rounded-md border-2 border-primary-grey text-primary-grey bg-white p-4 pt-4 font-medium text-base outline-none transition disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs text-primary-black" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-md border-2 border-primary-grey text-primary-grey bg-white p-4 pt-4 font-medium text-base outline-none transition disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                className="w-full rounded-lg bg-primary-main p-4 font-semibold text-white"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
