"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const path = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const textColor = path === "/" ? "text-white" : "text-black";

  return (
    <div>
      <div className="flex flex-row justify-between items-center ml-5 mr-5 ">
        <div>
          <h2
            className={`${textColor} font-semibold tracking-wide text-lg max-sm:mt-8`}
          >
            Art & Image Gallery
          </h2>
        </div>

        <div
          className={`flex flex-row sm:hidden text-white max-sm:mt-7`}
          onClick={handleDrawerClick}
        >
          <CiMenuFries size={25} color="#fff" />
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 z-20 bg-slate-600 transition-transform duration-300 ease-in-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute right-0 p-4 " onClick={handleDrawerClick}>
            <IoMdClose size={25} color="#fff" />
          </div>
          <div className="mt-7 flex justify-center flex-col items-center ">
            <div className="mt-5 p-1 border-b-2">
              <Link href="/" className="text-white cursor-pointer">
                Home
              </Link>
            </div>
            <div className="mt-5 p-1 border-b-2">
              <Link href="/about" className="text-white cursor-pointer">
                About
              </Link>
            </div>
            <div className="mt-5 p-1 border-b-2">
              <Link href="/gallery" className="text-white cursor-pointer">
                Gallery
              </Link>
            </div>
            <div className="mt-5 p-1 border-b-2">
              <Link href="/contact" className="text-white cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row max-sm:hidden">
          <div className="m-5">
            <Link href="/" className={`${textColor} cursor-pointer`}>
              Home
            </Link>
          </div>
          <div className="m-5">
            <Link href="/about" className={`${textColor} cursor-pointer`}>
              About
            </Link>
          </div>
          <div className="m-5">
            <Link href="/gallery" className={`${textColor} cursor-pointer`}>
              Gallery
            </Link>
          </div>
          <div className="m-5">
            <Link href="/contact" className={`${textColor} cursor-pointer`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
