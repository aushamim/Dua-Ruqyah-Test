import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="bg-white h-full rounded-3xl py-6 grid grid-rows-7">
      <div className="flex justify-center">
        <Link className="w-12 2xl:w-16" href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="row-span-5 flex justify-center items-center">
        <div className="flex flex-col space-y-6">
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/home.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/menu.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/memorize.svg"
              alt="Logo"
              width={20}
              height={20}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/keep-minus.svg"
              alt="Logo"
              width={20}
              height={20}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/ruqyah.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/dua-info.svg"
              alt="Logo"
              width={20}
              height={20}
              className="w-5 2xl:w-6"
            />
          </Link>
          <Link
            className="bg-[#E8F0F5] p-2.5 rounded-full hover:scale-105"
            href="/"
          >
            <Image
              src="/assets/icons/books.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-5 2xl:w-6"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-end justify-center">
        <Link
          href="/"
          className="bg-[#1FA45B] inline-block p-3 2xl:p-4 rounded-xl"
        >
          <Image
            src="/assets/icons/bxs_donate-heart.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-5 2xl:w-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
