import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className="grid grid-cols-[1fr_17%] gap-7 mb-7">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1 className="text-2xl">Duas Page</h1>
        </div>
        <div className="flex justify-end">
          <div className="relative flex">
            <input
              className="w-full rounded-md pl-4 pr-16 py-3 shadow-sm focus:outline-none focus:border-green-700 focus:ring-green-700 focus:ring-1 placeholder:text-mute-grey placeholder:text-sm bg-white"
              id="search"
              name="search"
              type="text"
              placeholder="Search by Dua Name"
            />
            <button className="bg-gray-100 px-4 py-2 rounded-md flex items-center justify-center absolute top-1 right-1 bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mr-5">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="flex items-center gap-2">
            <Image
              src="/assets/images/avatar.png"
              alt="Avatar"
              width={45}
              height={45}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                fill="#868686"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a>
                <Image
                  src="/assets/icons/support.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Support Us
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/download.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Download Dua App
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/privacy.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Privacy Policy
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/credit.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Thanks & Credits
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/about.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                About Us
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/copyright.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Copyright Warning
              </a>
            </li>
            <li>
              <a>
                <Image
                  src="/assets/icons/projects.svg"
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Our Other Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-5 2xl:hidden">
          <label
            htmlFor="drawer-sidebar"
            className="drawer-button cursor-pointer"
          >
            <Image
              src="/assets/icons/settings.svg"
              alt=""
              width={45}
              height={45}
              className="w-5"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
