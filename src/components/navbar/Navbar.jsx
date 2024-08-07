"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();

  const textColor = path === "/" ? "text-white" : "text-black";
  console.log(path);

  return (
    <div>
      <div className="flex flex-row justify-between items-center ml-10 mr-10">
        <div>
          <h2 className={`${textColor} font-semibold tracking-wide text-lg`}>
            Art & Image Gallery
          </h2>
        </div>

        <div className="flex flex-row">
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
