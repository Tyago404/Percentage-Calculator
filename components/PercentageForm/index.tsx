"use client";

import clsx from "clsx";
import { useState } from "react";
type StatesType = number | undefined | null;

export function PercentageForm() {
  const inputCommonClasses =
    "bg-white/70 p-2 hover:bg-white w-50 h-14 rounded-2xl text-2xl";

  const [firstValue, setFirstValue] = useState<StatesType>(undefined);
  const [secondValue, setSecondValue] = useState<StatesType>(undefined);
  const [result, setResult] = useState<StatesType>(undefined);

  function handlePercent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!secondValue) return;
    const res = setResult((Number(firstValue) * Number(secondValue)) / 100);

    return res;
  }

  function handleClearAll() {
    setFirstValue(null);
    setSecondValue(null);
    setResult(null);
  }
  return (
    <form
      onSubmit={handlePercent}
      className="flex flex-col bg-white/20 p-3 rounded-xl items-center justify-center gap-4 text-black font-bold text-xl"
    >
      <div className="flex items-center gap-4">
        <input
          type="number"
          placeholder="%"
          className={clsx(inputCommonClasses, "no-spinner")}
          value={firstValue ? firstValue : ""}
          onChange={(e) =>
            setFirstValue(e.target.value === "" ? null : Number(e.target.value))
          }
        />
        <span className="text-white">DE</span>
        <input
          type="number"
          className={clsx(inputCommonClasses, "no-spinner")}
          value={secondValue ? secondValue : ""}
          onChange={(e) =>
            setSecondValue(
              e.target.value === "" ? null : Number(e.target.value),
            )
          }
        />
        <span className="text-white">=</span>

        <input
          type="text"
          disabled
          value={result ? result : ""}
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
