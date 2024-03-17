import Image from "next/image";
import React from "react";

const AudioPlayer = ({ src }) => {
  return (
    <div>
      <div>
        <button>
          <Image
            src="/assets/icons/play.svg"
            alt=""
            width={100}
            height={100}
            className="w-11"
          />
        </button>
      </div>
      <div className="hidden">
        <audio controls>
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
