import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="py-[60px] bg-[#030303]">
      <div className="relative mt-auto w-full h-full bg-[#030303]">
        <div className=" w-full px-[20px] sm:w-[70%] py-[20px] mx-auto   border-t-[1px] border-b-[1px] border-[#80808059]">
          <Link
            href="/"
            className=" text-white flex items-center justify-start"
          >
            <div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1M12 23C12 23 8 19.7 8 12C8 4.3 12 1 12 1M12 23C12 23 16 19.7 16 12C16 4.3 12 1 12 1M1 9H23M1 15H23"
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div className="ml-[5px]">United States (English)</div>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="pt-[20px] w-full px-[20px] sm:px-0 sm:w-[70%] bg-[#030303] text-[#737373] ">
          © 2023 Block, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
