"use client";

import { useState, Suspense, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [seconds, setSeconds] = useState(0);

  const song = "https://www.youtube.com/watch?v=Fw2_N2mRni4";

  const handleProgress = (state: { playedSeconds: number }) => {
    setSeconds(Math.floor(state.playedSeconds));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100 relative">
      <Suspense fallback={null}>
        <ReactPlayer
          url={song}
          playing
          loop={false}
          muted={false}
          volume={0.05}
          width="0"
          height="0"
          onProgress={handleProgress}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            pointerEvents: "none",
          }}
        />
      </Suspense>
      <div className="flex flex-col items-center">
        {seconds >= 0 && seconds < 3 && (
          <Image
            src="/gang.jpeg"
            alt="Gang"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds === 4 && (
          <Image
            src={"/bop.jpeg"}
            alt="Bop"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds === 5 && (
          <Image
            src="/closed_eyes.jpeg"
            alt="Closed Eyes"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds >= 6 && seconds < 8 && (
          <Image
            src="/opened_eyes.jpeg"
            alt="Opened Eyes"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds >= 8 && seconds < 12 && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <span className="text-8xl font-extrabold text-center text-pink-600 drop-shadow-lg">
              THE GREATEST BIRTHDAY GIFT COMBO EVER
            </span>
          </div>
        )}
        {seconds >= 12 && seconds < 18 && (
          <Image
            src={"/darcy_cube.jpeg"}
            alt="Darcy Cube"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds >= 18 && seconds < 23 && (
          <Image
            src={"/elizabeth_tail_bite.jpeg"}
            alt="Elizabeth Tail Bite"
            width={500}
            height={500}
            className="mb-4"
          />
        )}
        {seconds >= 23 && seconds < 27 && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <span className="text-8xl font-extrabold text-center text-pink-600 drop-shadow-lg">
              AND FINALLY...
            </span>
          </div>
        )}
        {seconds >= 27 && seconds < 46 && (
          <div className="flex flex-row items-center justify-center mb-4">
            {seconds >= 35 && (
              <Image
                src={"/darcy.png"}
                alt="Darcy"
                width={190}
                height={200}
                className="mr-4"
              />
            )}
            <Image
              src={"/yours_truly.jpeg"}
              alt="Yours Truly"
              width={500}
              height={500}
            />
            {seconds >= 35 && (
              <Image
                src={"/elizabeth.png"}
                alt="Elizabeth"
                width={190}
                height={200}
                className="ml-4"
              />
            )}
          </div>
        )}
        {seconds >= 46 && (
          <Image
            src={"/cat_kissing.gif"}
            alt="Cat Kissing Gif"
            width={300}
            height={300}
            className="mb-4"
          />
        )}
        <div className="flex flex-col items-center text-2xl font-bold mt-4">
          {seconds < 46 && seconds >= 35 && <p>Happy Birthday To You</p>}
          {seconds < 46 && seconds >= 38 && <p>Happy Birthday To You</p>}
          {seconds < 46 && seconds >= 40 && <p>Happy Birthday...</p>}
          {seconds < 46 && seconds >= 41 && <p>Dear Jennyyy</p>}
          {seconds < 46 && seconds >= 42 && <p>Happy Birthday To You!</p>}
          {seconds >= 46 && <p>Happy Birthday Pookie. I Love Youuu &lt;3</p>}
        </div>
      </div>
    </div>
  );
}
