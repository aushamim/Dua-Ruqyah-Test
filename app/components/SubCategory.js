"use client";

import Image from "next/image";
import React, { useState } from "react";

const SubCategory = ({ openState }) => {
  const [subCatView, setSubCatView] = useState("-");
  const [subSubCatView, setSubSubCatView] = useState("-");

  return (
    <div>
      {/* Subcategory */}
      <div className="ml-3">
        <div
          className={
            openState === true
              ? "border-l-2 border-[#1FA45B] border-dotted ml-4"
              : "border-l-2 border-[#1FA45B] border-dotted ml-4 h-0 overflow-hidden"
          }
        >
          <div className="text-sm font-semibold pl-3 py-4 relative">
            <button
              onClick={() => {
                setSubCatView("0");
                setSubSubCatView("-");
              }}
            >
              <p className="text-[#1FA45B] text-xl absolute top-1/2 -translate-y-1/2 -left-1.5">
                •
              </p>
              <p
                className={
                  subCatView === "0" ? "text-left text-[#1FA45B]" : "text-left"
                }
              >
                The servant is dependent on his Lord
              </p>
            </button>
          </div>

          {/* Sub subcategory */}
          <div className={subCatView === "0" ? "" : "h-0 overflow-hidden"}>
            <div className="ml-4 pb-5 last:pb-2">
              <button
                className=" relative"
                onClick={() => {
                  setSubSubCatView("0-0");
                }}
              >
                <Image
                  src="/assets/icons/dua node.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-4 absolute -top-1.5 left-0"
                />
                <p
                  className={
                    subSubCatView === "0-0"
                      ? "ml-5 text-[0.8rem] text-left text-[#1FA45B]"
                      : "ml-5 text-[0.8rem] text-left"
                  }
                >
                  The servant is dependent on his Lord #1
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-3">
        <div
          className={
            openState === true
              ? "border-l-2 border-[#1FA45B] border-dotted ml-4"
              : "border-l-2 border-[#1FA45B] border-dotted ml-4 h-0 overflow-hidden"
          }
        >
          <div className="text-sm font-semibold pl-3 py-4 relative">
            <button
              onClick={() => {
                setSubCatView("1");
                setSubSubCatView("-");
              }}
            >
              <p className="text-[#1FA45B] text-xl absolute top-1/2 -translate-y-1/2 -left-1.5">
                •
              </p>
              <p
                className={
                  subCatView === "1" ? "text-left text-[#1FA45B]" : "text-left"
                }
              >
                The servant is dependent on his Lord
              </p>
            </button>
          </div>

          {/* Sub subcategory */}
          <div className={subCatView === "1" ? "" : "h-0 overflow-hidden"}>
            <div className="ml-4 pb-5 last:pb-2">
              <button
                className=" relative"
                onClick={() => {
                  setSubSubCatView("1-0");
                }}
              >
                <Image
                  src="/assets/icons/dua node.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-4 absolute -top-1.5 left-0"
                />
                <p
                  className={
                    subSubCatView === "1-0"
                      ? "ml-5 text-[0.8rem] text-left text-[#1FA45B]"
                      : "ml-5 text-[0.8rem] text-left"
                  }
                >
                  The servant is dependent on his Lord #1
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
