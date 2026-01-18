"use client";

import { useState } from "react";

export function PercentageForm() {
  const inputCommonClasses =
    "bg-white/70 p-2 hover:bg-white w-50 h-14 rounded-2xl text-2xl";

  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState(0);

  function handlePercent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!secondValue) return;
    const res = setResult((Number(firstValue) / Number(secondValue)) * 100);

    return res;
  }

  function handleClearAll() {}
  return (
    <form
      onSubmit={handlePercent}
      className="flex flex-col bg-white/20 p-3 rounded-xl items-center justify-center gap-4 text-black font-bold text-xl"
    >
      <div className="flex items-center gap-4">
        <input
          type="number"
          placeholder="%"
          className={inputCommonClasses}
          onChange={(e) => setFirstValue(e.target.value)}
        />
        <span className="text-white">DE</span>
        <input
          type="number"
          className={inputCommonClasses}
          onChange={(e) => setSecondValue(e.target.value)}
        />
        <span className="text-white">=</span>

        <input
          type="text"
          disabled
          value={result}
          className={inputCommonClasses}
        />
      </div>

      <div className="flex items-center justify-center p-4">
        <button className="bg-green-400 p-3 ml-1 rounded-2xl cursor-pointer w-50 text-white text-xl hover:scale-102">
          Calcular
        </button>
        <button
          type="button"
          onClick={handleClearAll}
          className="bg-red-400 p-3 ml-1  rounded-2xl cursor-pointer w-25 text-white text-xl hover:scale-102"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}
