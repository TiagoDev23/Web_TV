"use client";

import React, { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay } from "react-icons/fa";
import videos, { Video } from "./data/video";
import { AiFillSound } from "react-icons/ai";
import { convertTimeToString } from "./utils/Utils";

export default function Home() {
  const {
    videoURL,
    playing,
    totalTime,
    currentTime,
    videoRef,
    canvasRef,
    playPause,
    configCurrentTime,
    configVideo,
    playSound,
    configFilter
  } = useContext(HomeContext);
  const volumeControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    playSound(volume);
  };
  return (
    <main className="mx-auto w-[65%] mt-2 flex">
      <div className="w-[640px] mr-1">
        <h1 className="font-bold text-black">
          Home {videoURL} - {playing ? "true" : "false"}
        </h1>
        <video width={640} ref={videoRef} controls src={videoURL} hidden></video>
        <canvas className="w-full h-[380px]" ref={canvasRef}></canvas>

        <div className="bg-white flex">
          <input className="appearance-none w-full h-3 bg-gray-200 rounded-full
          [&::-webkit-slider-runnable-track]:appearance-none
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-runnable-track]:bg-[black]
        
          [&::-webkit-slider-thumb]:h-[10px]
          [&::-webkit-slider-thumb]:w-[10px]
          [&::-webkit-slider-thumb]:bg-[blue]
          [&::-webkit-slider-thumb]:rounded-full"
          type="range"
          min={0}
          max={totalTime}
          value={currentTime}
          onChange={(e) => configCurrentTime(Number(e.target.value))}
        ></input>
        <div className="ml-4">
          <AiFillSound />
        </div>
        <input
          className="appearance-none w-16 ml-2 h-3 bg-gray-200 rounded-full"
          type="range"
          min={0}
          max={1}
          step={0.1}
          onChange={volumeControl}
        ></input>
      </div>

      <button className="mt-4" onClick={playPause}>
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <select onChange={(e) => configFilter(Number(e.target.value))}>
        <option selected value={0}>Verde</option>
        <option value={1}>Azul</option>
        <option value={2}>vermelho</option>
        <option value={3}>Preto e Branco</option>
      </select>
      {convertTimeToString(currentTime)}/{convertTimeToString(totalTime)}
    </div>

    <div className="w-[35%] h-[100vh]">
      {videos.map((video: Video, index) => {
        return (
          <button className="w-full" onClick={(e) => configVideo(index)} key={index}>
            <img
              className="w-full h-[200px] mb-1"
              src={video.imageURL}
              alt={`Thumbnail ${index}`}
            />
          </button>
        );
      })}
    </div>
  </main>
  );
}
