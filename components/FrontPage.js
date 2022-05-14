import { gsap, Expo } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

export default function FrontPage() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("04/18/2022 23:59:59");

    gsap.from(".firstWord", {
      xPercent: 100,
      duration: 3.0,
      delay: 3.5,
      ease: Expo.easeInOut,
    });
    tl.from(".simp", 1, {
      x: "100",
      opacity: 0,
      stagger: 0.15,
      scale: ".8",
      delay: 4.5,
      ease: Expo.easeInOut,
    });

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ height: "70vh" }}
      className="relative flex items-end justify-center text-center text-white"
    >
      {/* <h1 className="text-center text-xl">5 YEAR ANNIVERSARY SALE</h1>
      <div className="flex relative justify-center text-center ">
        <div className="flex pt-10   uppercase text-gray-900 sm:opacity-50 text-7xl sm:text-9xl">
          <div className="timer-segment flex-col flex text-center ">
            <span className="time  ">{days}</span>
            <span className="label text-xl sm:text-5xl">Days</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  ">{hours}</span>
            <span className="label text-xl sm:text-5xl">Hours</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time ">{minutes}</span>
            <span className="label text-xl sm:text-5xl">Minutes</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  text-red-600">{seconds}</span>
            <span className="label text-xl sm:text-5xl">Seconds</span>
          </div>
        </div>
      </div>
      <div className="justify-center text-center z-10 my-10 line">
        <div className=" sm:pt-26 text-4xl font-mono ">
          <span>Ignite Your Dreams</span>
        </div>
        <div className=" font-mono py-5 text-xl">
          <span>
            Be your boldest self and embrace a new world of wonder in crystal
            and color.
          </span>
        </div>
      </div> */}

      {/* <div
        style={{
          fontSize: "8.3rem",
        }}
        className="text-opening text-lg"
      >
        <h1 className="firstWord">
          Shine <span className="simp">Bright</span>
          <span className="simp"> In</span>
          <span className="simp">G</span>
          <span className="simp">O</span>
          <span className="simp">L</span>
          <span className="simp">D</span>
        </h1>
      </div> */}
    </div>
  );
}
