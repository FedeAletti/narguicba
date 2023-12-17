import React from "react";

const borderedText =
  "[-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:.5px] [-webkit-text-stroke-color:#fff]";

export function Hero() {
  const isOdd = (number: number): boolean => {
    return number % 2 !== 0;
  };

  return (
    <div className="grid min-h-screen items-end justify-center overflow-x-hidden">
      <div className="animate-textCarousel flex w-screen flex-nowrap gap-6">
        {Array.from({length: 30}).map((_, i) => (
          <div key={i} className="mb-5 flex flex-1  gap-3">
            <h1
              className={`font-titles text-5xl font-bold ${isOdd(i) ? borderedText : "text-white"}`}
            >
              NARGUILAS
            </h1>
            <h1
              className={`font-titles text-5xl font-bold ${isOdd(i) ? borderedText : "text-white"}`}
            >
              CORDOBA
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
