"use client";

export function PercentageForm() {
  const inputCommonClasses =
    "bg-white/70 p-2 hover:bg-white w-50 h-14 rounded-2xl text-2xl";

  function handlePercent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handlePercent}
      className="flex flex-col bg-white/20 p-3 rounded-xl items-center justify-center gap-4 text-black font-bold text-xl "
    >
      <div className="flex items-center gap-4">
        <input type="text" placeholder="%" className={inputCommonClasses} />
        <span className="text-white">DE</span>
        <input type="text" className={inputCommonClasses} />
        <span className="text-white">=</span>
        <input type="text" className={inputCommonClasses} />
      </div>

      <div className="flex items-center justify-center p-4">
        <button className="bg-green-400 p-3 ml-1 rounded-2xl cursor-pointer w-50 text-white text-xl hover:scale-102">
          Calcular
        </button>
        <button className="bg-red-400 p-3 ml-1  rounded-2xl cursor-pointer w-25 text-white text-xl hover:scale-102">
          Limpar
        </button>
      </div>
    </form>
  );
}
