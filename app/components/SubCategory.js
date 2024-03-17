import Image from "next/image";
import React, { useEffect, useState } from "react";

const SubCategory = ({ openState, catId }) => {
  const [subCatView, setSubCatView] = useState(0);
  const [subSubCatView, setSubSubCatView] = useState("-");

  const [subCat, setSubCat] = useState([]);
  const [subSubCat, setSubSubCat] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/sub-category/${catId}`)
      .then((res) => res.json())
      .then((data) => setSubCat(data));

    fetch(`http://localhost:5000/dua-subcategory/${catId}`)
      .then((res) => res.json())
      .then((data) => setSubSubCat(data));
  }, [catId]);

  return (
    <div>
      {/* Subcategory Start */}
      {subCat?.map((x) => (
        <div key={x.id} className="ml-3">
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
                  setSubCatView(x.id);
                  setSubSubCatView("-");

                  const scrollDiv = document.getElementById(
                    `section-${x.cat_id}-${x.subcat_id}`
                  );
                  const container = document.getElementById("dua-body");
                  if (window.screen.width > 1400) {
                    container.scrollTop = scrollDiv.offsetTop - 108;
                  } else {
                    container.scrollTop = scrollDiv.offsetTop - 88;
                  }
                }}
              >
                <p className="text-[#1FA45B] text-xl absolute top-1/2 -translate-y-1/2 -left-1.5">
                  •
                </p>
                <p
                  className={
                    subCatView === x.id
                      ? "text-left text-[#1FA45B]"
                      : "text-left"
                  }
                >
                  {x.subcat_name_en}
                </p>
              </button>
            </div>

            {/* Sub subcategory Start */}
            {subSubCat?.map((y) =>
              y.subcat_id === x.subcat_id ? (
                <div
                  key={y.id}
                  className={subCatView === x.id ? "" : "h-0 overflow-hidden"}
                >
                  <div className="ml-4 pb-5">
                    <button
                      className=" relative"
                      onClick={() => {
                        setSubSubCatView(
                          `${y.cat_id}-${y.subcat_id}-${y.dua_id}`
                        );

                        const scrollDiv = document.getElementById(
                          `dua-${y.cat_id}-${y.subcat_id}-${y.dua_id}`
                        );
                        const container = document.getElementById("dua-body");
                        if (window.screen.width > 1400) {
                          container.scrollTop = scrollDiv.offsetTop - 108;
                        } else {
                          container.scrollTop = scrollDiv.offsetTop - 88;
                        }
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
                          subSubCatView ===
                          `${y.cat_id}-${y.subcat_id}-${y.dua_id}`
                            ? "ml-5 text-[0.8rem] text-left text-[#1FA45B]"
                            : "ml-5 text-[0.8rem] text-left"
                        }
                      >
                        {y?.dua_name_en}
                      </p>
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
            {/* Sub subcategory End */}
          </div>
        </div>
      ))}
      {/* Subcategory End */}
    </div>
  );
};

export default SubCategory;
