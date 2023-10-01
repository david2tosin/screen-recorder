import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col items-start max-w-7xl mx-auto gap-8 px-4 py-10">
      <p className="text-lg font-normal text-primary-grey">
        Home {""}/Videos {""} / <span className="text-primary-main">title</span>
      </p>
      {/* replace with dynamic video title */}
      <h2 className=" font-semibold text-2xl">
        How To Create A Facebook Ad Listing !
      </h2>

      <Image src="/videoframe.jpg" alt="thumbnail" width={1280} height={450} />

      <div className="w-full flex justify-start gap-20">
        <div className="w-[600px] flex justify-between items-center rounded-md  bg-[#434343]/20 ">
          <input
            type="email"
            id="email"
            placeholder="enter email of reciever"
            className="mt-2 w-full rounded-md bg-transparent text-primary-grey p-4 pt-4 font-medium text-base outline-none"
          />
          <button className="bg-[#605C84] text-white rounded-lg m-2 p-3">
            send
          </button>
        </div>
        <div className="w-[600px] p-3 flex justify-between items-center border rounded-md border-dotted border-primary-grey">
          <input
            type="text"
            id="text"
            placeholder="https://www.helpmeout/Untitled_Video_20232509"
            className="mt-2 w-full rounded-md border-1 border-[#929292] bg-inherit text-primary-grey p-4 pt-4 font-normal text-base outline-none"
          />
          <div className="flex justify-between items-center gap-1 rounded-md border-2 border-primary-main px-[18px] py-[10px]">
            <Image src="/copy.svg" alt="transcript" width={20} height={20} />
            <p className="p-1 mr-1">copy</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
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

      <div className="flex my-12">
        <Image
          src="/transcriptb.jpg"
          alt="transcript"
          width={1280}
          height={490}
        />
      </div>
    </div>
  );
}
