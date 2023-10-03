import Image from "next/image";
import { HiOutlineCamera } from "react-icons/hi";
import { PiPencilCircleBold } from "react-icons/pi";
import { TbColorFilter } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { BsDribbble } from "react-icons/bs";
import { PiTwitterLogoBold } from "react-icons/pi";

export default function Section() {
  return (
    <section className="">
      {/* section 1 */}
      <div className="flex space-x-4 justify-between">
        {/* Kiri*/}
        <div className="flex p-8 justify-between h-80 w-1/2 bg-gray-800 rounded-xl">
          <div className="w-1/2">
            <Image src={"/me2.png"} width={240} height={50} />
          </div>
          <div className="w-1/2">
            <h4 className="text-2xl text-gray-500">A Web Designer</h4>
            <h1 className=" text-5xl font-bold">David Henderson.</h1>
            <p className="text-2xl text-gray-400">I am a Web Designer based in san francisco.</p>
          </div>
        </div>

        {/* Kanan*/}
        <div className="w-1/2 flex flex-col h-80">
          <div className="flex bg-gray-800 h-1/6 mb-4 rounded-xl p-2">
            <p className="text-white-200 text-xl">
              LATEST WORK AND <b>FEATURED</b>. LATEST WORK AND <b>FEATURED</b>
            </p>
          </div>

          <div className="flex h-5/6 justify-between space-x-8">
            <div className="flex-1 bg-gray-800 w-80 rounded-xl p-2">
              <img src="/sign.png" width={320} height={200} />
              <h4 className="text-2xl text-gray-500">More About Me</h4>
              <h1 className="text-3xl font-bold">Credentials</h1>
            </div>
            <div className="flex-1 bg-gray-800 w-80 rounded-xl p-2">
              <img src="/my-works.png" width={320} height={200} />
              <h4 className="text-2xl text-gray-500">Showcase</h4>
              <h1 className="text-3xl font-bold">Projects</h1>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex space-x-4 justify-center mt-4">
        <div className="flex bg-gray-800 h-60 w-80 rounded-xl p-2 mt-4">
          <div className="">
            <Image src={"/gfonts.png"} width={280} height={200} />
            <h4 className="text-3x1  text-gray-500">Blog</h4>
            <h1 className="text-4xl font-bold">GFonts</h1>
          </div>
        </div>

        <div>
          <div className="grid grid-rows-2 gap-4 bg-gray-800 h-60 w-96 rounded-xl p-2 mt-4">
            <div className="flex justify-center items-center row-span-2 space-x-4">
              <div className="text-6xl">
                <HiOutlineCamera />
              </div>
              <div className="text-6xl">
                <PiPencilCircleBold />
              </div>
              <div className="text-6xl">
                <TbColorFilter />
              </div>
              <div className="text-6xl">
                <MdDeveloperMode />
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-3xl text-gray-500">Specialization</h4>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold">Services Offering</h1>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-rows-2 gap-4 bg-gray-800 h-60 w-96 rounded-xl p-2 mt-4">
            <div className="flex justify-center items-center row-span-2 space-x-8">
              <div className="text-6xl">
                <BsDribbble />
              </div>
              <div className="text-6xl">
                <PiTwitterLogoBold />
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-3xl text-gray-500">Stay with me</h4>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold">Profiles</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center mt-8">
        <div className="flex bg-gray-800 h-52 w-1/2 bg-dark rounded-xl p-2 mt-4">
          <div className="w-2/3 flex space-x-16 mx-8 mt-4">
            <div className="flex justify-center items-center bg-gray-600 h-40 w-96 bg-dark rounded-xl p-2">
              <div className="flex flex-col items-center text-center">
                <p className="text-4xl font-bold">07</p>
                <h1 className="text-2xl">Years Experience</h1>
              </div>
            </div>

            <div className="flex justify-center items-center bg-gray-600 h-40 w-96 bg-dark rounded-xl p-2">
              <div className="flex flex-col items-center text-center">
                <p className="text-4xl font-bold">+125</p>
                <h1 className="text-2xl">Clients Worldwide</h1>
              </div>
            </div>

            <div className="flex justify-center items-center bg-gray-600 h-40 w-96 bg-dark rounded-xl p-4">
              <div className="flex flex-col items-center text-center">
                <p className="text-4xl font-bold">+210</p>
                <h1 className="text-2xl">Total Projects</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex bg-gray-800 h-52 w-auto bg-dark rounded-xl p-2 mt-4">
            <div className="w-1/2">
              <h4 className="text-5xl text-white">Let's</h4>
              <h1 className="text-7xl font-bold">
                work<span className="text-blue-500 ml-2">together.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
