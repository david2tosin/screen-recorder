import Image from "next/image";
import { inter } from "./fonts";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex flex-col justify-between max-w-5xl mx-auto md:flex-row gap-10 px-4 py-32">
          <div className="space-y-4">
            <h2 className="font-bold text-4xl lg:text-6xl">
              Show Them Don’t Just Tell
            </h2>
            <p className={`${inter.className}font-normal text-xl`}>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-14 -right-10 -z-10">
              <Image
                src="/dotgrid.svg"
                alt="dot grid"
                width={250}
                height={250}
              />
            </div>
            <div className="absolute -bottom-20 -left-8 -z-10">
              <Image
                src="/dotgrid.svg"
                alt="url image"
                width={250}
                height={250}
              />
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-0">
              <div>
                <Image
                  src="/hero.jpg"
                  alt="url image"
                  width={400}
                  height={300}
                />
              </div>
              <div className="row-span-2">
                <Image
                  src="/hero2.jpg"
                  alt="url image"
                  width={500}
                  height={600}
                />
              </div>
              <div>
                <Image
                  src="/hero1.jpg"
                  alt="url image"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
