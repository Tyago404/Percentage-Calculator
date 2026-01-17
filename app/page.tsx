import { MainContainer } from "@/components/MainContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image alt="background" fill src="/images/main-background.png" className="object-cover opacity-45 brightness-30 pointer-events-none"  />
      <MainContainer>
        <div className="p-2 bg-white/25 rounded-4xl w-250 h-150">

        </div>
      </MainContainer> 
    </div>
  );
}
