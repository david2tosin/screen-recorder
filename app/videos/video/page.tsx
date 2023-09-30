import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-around max-w-7xl mx-auto items-center w-full h-full p-8 my-6">
      <div className=" w-1/2 flex flex-col items-start space-y-16">
        <h2 className="font-bold text-4xl">Your video is ready!</h2>
        <div className="w-3/4 flex justify-start items-center gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-xs text-primary-black" htmlFor="text">
              Name
            </label>
            <input
              type="text"
              id="text"
              placeholder="Untitled_Video_20232509 "
              className="mt-2 w-full rounded-md bg-white text-[#413C6D] p-4 pt-4 font-semibold text-2xl outline-none"
            />
          </div>
          <Image src="/edit.svg" alt="transcript" width={32} height={32} />
        </div>

        <div className="w-3/4 flex justify-between rounded-md  bg-[#434343]/20 ">
          <input
            type="email"
            id="email"
            placeholder="enter email of reciever"
            className="mt-2 w-full rounded-md bg-transparent text-primary-grey p-4 pt-4 font-medium text-base outline-none"
          />
          <button className="bg-[#605C84] text-white rounded-lg m-2 p-2">
            send
          </button>
        </div>

        <div className="w-3/4 flex justify-start items-center gap-2">
          <div className="w-full flex flex-col gap-1">
            <label className="text-xs text-primary-black" htmlFor="text">
              Video Url
            </label>
            <div className="flex gap-3 justify-between">
              <input
                type="text"
                id="text"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                className="mt-2 w-full rounded-md border-1 border-[#929292] bg-inherit text-primary-grey p-4 pt-4 font-normal text-base outline-none"
              />
              <div className="flex gap-2 justify-between items-center rounded-md border-2 border-primary-main m-3 p-2">
                <Image
                  src="/copy.svg"
                  alt="transcript"
                  width={20}
                  height={20}
                />
                <p>copy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <p>Share your video</p>
          <div className="flex justify-between gap-4">
            <div className="flex gap-2 justify-between items-center rounded-md border-2 border-black p-2">
              <Image
                src="/facebooks.svg"
                alt="facebooklogo"
                width={24}
                height={24}
              />
              <p>Facebook</p>
            </div>
            <div className="flex gap-2 justify-between items-center rounded-md border-2 border-black p-2">
              <Image
                src="/whatsapp.svg"
                alt="whatsapplogo"
                width={24}
                height={24}
              />
              <p>Whatsapp</p>
            </div>
            <div className="flex gap-2 justify-between items-center rounded-md border-2 border-black p-2">
              <Image
                src="/telegram.svg"
                alt="telegramlogo"
                width={24}
                height={24}
              />
              <p>Telegram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center space-y-40">
        <Image src="/video.jpg" alt="transcript" width={570} height={470} />
        <Image
          src="/transcript.svg"
          alt="transcript"
          width={570}
          height={370}
        />
      </div>
    </div>
  );
}
