import Image from "next/image";
import Link from "next/link";
import { inter, work_sans } from "../fonts";

export default function Nav() {
  return (
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

        <div className="flex justify-between items-center">
          <div>
            <ul
              className={`${work_sans.className}hidden sm:flex sm:gap-10 text-primary-black font-medium text-base`}
            >
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#howitworks">How It Works</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:flex gap-4 text-lg font-semibold">
          <Link
            className="px-4 py-2  text-primary-main rounded-full hover:text-primary-light transition-colors"
            href="/login"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
