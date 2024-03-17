import Image from "next/image";
import React, { useState } from "react";

const AudioPlayer = ({ src, duaId }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioDuration, setAudioDuratuion] = useState(0);
  const [repeat, setRepeat] = useState(false);

  const audio = document.getElementById(`audio-${duaId}`);
  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={() => {
            if (audioPlaying) {
              audio?.pause();
              setAudioPlaying(false);
            } else {
              audio?.play();
              setAudioPlaying(true);
            }
          }}
        >
          {audioPlaying ? (
            <Image
              src="/assets/icons/pause.svg"
              alt=""
              width={100}
              height={100}
              className="w-11"
            />
          ) : (
            <Image
              src="/assets/icons/play.svg"
              alt=""
              width={100}
              height={100}
              className="w-10"
            />
          )}
        </button>

        <div
          className={
            audioPlaying
              ? "w-full ml-10 flex items-center gap-10"
              : "w-full ml-10 hidden items-center gap-10"
          }
        >
          <div className="w-1/3">
            <input
              type="range"
              min="0"
              max={audio?.duration * 1000}
              value={audioDuration}
              className="range range-xs range-success"
              onChange={(e) => {
                setAudioDuratuion(e.target.value * 1000);
                audio.currentTime = e.target.value / 1000;
              }}
            />
          </div>
          <div class="tooltip" data-tip={`Repeat ${repeat ? "On" : "Off"}`}>
            <button
              onClick={() => {
                if (repeat) {
                  audio.loop = false;
                  setRepeat(false);
                } else {
                  audio.loop = true;
                  setRepeat(true);
                }
              }}
            >
              <Image
                src="/assets/icons/repeat.svg"
                alt=""
                width={100}
                height={100}
                className="w-8"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden">
        <audio
          id={`audio-${duaId}`}
          controls
          onEnded={() => {
            setAudioPlaying(false);
          }}
          onTimeUpdate={() => {
            setAudioDuratuion(Math.ceil(audio.currentTime * 1000));
          }}
        >
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
