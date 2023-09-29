import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-neutral-800 bg-primary-main">
      <div className="max-w-7xl flex justify-start items-start gap-40 sm:px-8 px-5 py-24 mx-auto text-white">
        <div className=" row-span-2 order-last md:order-first">
          <Link
            href="/"
            className="flex gap-2 justify-start focus:outline-none focus-visible:ring-4 ring-neutral-600 rounded-sm ring-offset-4 hover:opacity-75 transition-opacity"
          >
            <Image
              src="/logof.svg"
              alt="Scissor"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="text-2xl font-semibold tracking-wide">HelpMeOut</p>
          </Link>
        </div>

        <div className="flex flex-col gap-5 text-sm lg:text-base ">
          <h4 className="font-semibold ">Menu</h4>
          <Link className="font-normal hover:opacity-75" href="#">
            Home
          </Link>
          <Link className="font-normal hover:opacity-75" href="#">
            Converter
          </Link>
          <Link className="font-normal hover:opacity-75" href="#howitworks">
            How it Works
          </Link>
        </div>

        <div className="flex flex-col gap-5 text-sm lg:text-base ">
          <h4 className="font-semibold ">About us</h4>
          <Link className="font-normal hover:opacity-75" href="#">
            About
          </Link>
          <Link className="font-normal hover:opacity-75" href="#">
            Contact US
          </Link>
          <Link className="font-normal hover:opacity-75" href="#">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-5 text-sm lg:text-base ">
          <h4 className="font-semibold ">Screen Record</h4>
          <Link className="font-normal hover:opacity-75" href="#">
            Browser Window
          </Link>
          <Link className="font-normal hover:opacity-75" href="#">
            Desktop
          </Link>
          <Link className="font-normal hover:opacity-75" href="#">
            Application
          </Link>
        </div>
      </div>
    </footer>
  );
}
