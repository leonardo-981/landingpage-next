import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[linear-gradient(180deg,#240302_0%,#9f0e0f_100%)] w-full min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-5">
        <div className="relative max-w-[450px] rounded-xl overflow-hidden h-auto flex items-center justify-center bg-gray-100">
          <img src="/assets/img/ft.webp" alt="Logo" className="w-full h-auto" />
        </div>

        <div className="mt-8 space-y-4">
          <h1 className="text-center text-5xl font-bold text-white">
            Você tem mais de <span className="text-red-500">18 anos?</span>
          </h1>

          <p className="text-base text-center max-w-xl text-white">
            Clique no botão abaixo se você é maior e quer assistir a
            apresentação completa.
          </p>
        </div>

        <a
          href="/video"
          className="cursor-pointer hover:bg-green-400 hover:transform-gpu transition-transform hover:scale-105 hover:ease-in-out mt-4 flex justify-center items-center text-center text-md xs:text-xl sm:text-2xl uppercase bg-green-500 py-3.5 px-[42px] font-medium rounded-xl box-shadow-lg text-white"
        >
          Assistir agora! <MoveRight className="inline-block ml-2" />
        </a>
      </div>
    </div>
  );
}
