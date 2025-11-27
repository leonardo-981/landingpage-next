import Video from "@/components/Player";
import { ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,#240302_0%,#9f0e0f_100%)] pb-20 pt-10 w-full min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-5">
        <div className="relative text-center flex flex-col items-center justify-center pb-5">
          <h1 className="font-bold text-3xl sm:text-4xl text-red-500">
            Promoção Por Tempo Limitado!
          </h1>
          <h2 className="font-bold text-3xl sm:text-4xl">
            Descubra o Segredo dos Movimentos Mágicos
          </h2>
        </div>

        <Video />

        <a
          href="https://global.ironpayapp.com.br/ehofsfj9p8"
          className="cursor-pointer hover:bg-green-400 hover:transform-gpu transition-transform hover:scale-105 hover:ease-in-out mt-4 flex justify-center items-center text-center text-md xs:text-xl sm:text-2xl uppercase bg-green-500 py-3.5 px-[42px] font-medium rounded-xl box-shadow-lg text-white"
        >
          Comprar agora! <ShoppingBag className="inline-block ml-2" />
        </a>
      </div>
    </div>
  );
}
