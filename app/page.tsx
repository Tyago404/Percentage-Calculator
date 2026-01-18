import { MainContainer } from "@/components/MainContainer";
import { PercentageForm } from "@/components/PercentageForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image alt="background" fill src="/images/main-background2.png" className="object-cover opacity-45 brightness-30 pointer-events-none"  />
      <MainContainer>
        <div className="flex flex-col items-center p-12 bg-white/5 rounded-4xl w-220 h-100">
          {/* <h1 className="text-5xl font-extrabold p-6">Calculadora de Porcentagem</h1> */}
          <PercentageForm />
        </div>
      </MainContainer> 
    </div>
  );
}
