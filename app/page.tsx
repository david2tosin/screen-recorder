import Image from "next/image";
import { inter, work_sans } from "./fonts";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="border-b-[40px] border-[#F4F6F8]">
        <div className="flex flex-col justify-between max-w-5xl mx-auto md:flex-row gap-10 px-4 py-32">
          <div className="space-y-4">
            <h2 className="font-bold text-4xl lg:text-6xl">
              Show Them Don’t Just Tell
            </h2>
            <p className={`${inter.className}font-normal text-xl`}>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <button className="bg-primary-main text-white rounded-lg p-5">
              Install HelpMeOut
            </button>
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

      <section id="#features" className="border-b-[40px] border-[#F4F6F8]">
        <div className="flex flex-col justify-between max-w-5xl mx-auto gap-10 px-4 py-20 space-y-16">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl lg:text-5xl">Features</h2>
            <p
              className={`${work_sans.className}font-normal text-xl text-primary-grey`}
            >
              Key Highlights of Our Extension
            </p>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-12">
              <div className="Flex justify-center items-center gap-2">
                <Image
                  src="/record-circle.svg"
                  alt="dot grid"
                  width={32}
                  height={32}
                />
                <h3
                  className={`${inter.className}font-semibold text-lg text-primary-light`}
                >
                  Simple Screen Recording
                </h3>
                <p
                  className={`${work_sans.className}font-normal text-sm text-primary-grey`}
                >
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
              <div className="Flex justify-center items-center gap-2">
                <Image
                  src="/refresh-square-2.svg"
                  alt="dot grid"
                  width={32}
                  height={32}
                />
                <h3
                  className={`${inter.className}font-semibold text-lg text-primary-light`}
                >
                  Easy-to-Share URL
                </h3>
                <p
                  className={`${work_sans.className}font-normal text-sm text-primary-grey`}
                >
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
              <div className="Flex justify-center items-center gap-2">
                <Image
                  src="/send-2.svg"
                  alt="dot grid"
                  width={32}
                  height={32}
                />
                <h3
                  className={`${inter.className}font-semibold text-lg text-primary-light`}
                >
                  Revisit Recordings
                </h3>
                <p
                  className={`${work_sans.className}font-normal text-sm text-primary-grey`}
                >
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/Videorepository.jpg"
                alt="dot grid"
                width={636}
                height={454}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="#howitworks">
        <div className="flex flex-col justify-between max-w-5xl mx-auto gap-10 px-4 py-20 space-y-16">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl lg:text-5xl">How it works</h2>
          </div>
          <div className="flex justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-8">
              <Image src="/1.svg" alt="one" width={60} height={60} />
              <h3
                className={`${inter.className}font-semibold text-2xl text-primary-light`}
              >
                Record Screen
              </h3>
              <p
                className={`${work_sans.className}font-normal text-sm text-primary-grey`}
              >
                Click the &quot;Start Recording&quot;button in our extension.
                choose which part of your screen to capture and who you want to
                send it to.
              </p>
              <Image
                src="/rec.svg"
                alt="recorder"
                width={358}
                height={270}
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <Image src="/2.svg" alt="two" width={60} height={60} />
              <h3
                className={`${inter.className}font-semibold text-2xl text-primary-light`}
              >
                Share Your Recording
              </h3>
              <p
                className={`${work_sans.className}font-normal text-sm text-primary-grey`}
              >
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
              <Image
                src="/rec.svg"
                alt="recorder"
                width={358}
                height={270}
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <Image src="/3.svg" alt="three" width={60} height={60} />
              <h3
                className={`${inter.className}font-semibold text-2xl text-primary-light`}
              >
                Learn Effortlessly
              </h3>
              <p
                className={`${work_sans.className}font-normal text-sm text-primary-grey`}
              >
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <Image
                src="/rec.svg"
                alt="recorder"
                width={358}
                height={270}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
