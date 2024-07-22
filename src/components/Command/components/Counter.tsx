"use client";
import React, { useEffect, useState } from "react";
import { useCountUp } from "react-countup";

export default function Counter() {
  const countUpRef = React.useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 100,
    delay: 1000,
    duration: 5,
    suffix: "+",
    enableScrollSpy: true,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          update(100);
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="text-primary md:text-9xl text-7xl font-bold"
        ref={countUpRef}
      ></div>
    </>
  );
}
