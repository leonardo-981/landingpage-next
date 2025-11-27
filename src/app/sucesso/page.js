import { CheckCircle, MoveRight } from "lucide-react";

export default function Success() {
  return (
    <div className="bg-[linear-gradient(180deg,#240302_0%,#9f0e0f_100%)] w-full min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-7">
        <div className="text-center space-y-3 mt-4">
          <CheckCircle className="mx-auto text-green-400" size={72} />

          <h1 className="text-4xl font-bold text-white">
            Pagamento <span className="text-green-400">Aprovado!</span>
          </h1>

          <p className="text-base max-w-xl text-white/90">
            Obrigado pela sua compra! Vocem receber um link de acesso
            automaticamente para o e-mail cadastrado no pagamento.
          </p>
        </div>

        {/* <a
          href="/downloads"
          className="cursor-pointer hover:bg-green-400 hover:transform-gpu transition-transform hover:scale-105 hover:ease-in-out mt-4 flex justify-center items-center text-center text-md xs:text-xl sm:text-2xl uppercase bg-green-500 py-3.5 px-[42px] font-medium rounded-xl box-shadow-lg text-white"
        >
          Acessar arquivos <MoveRight className="inline-block ml-2" />
        </a> */}
      </div>
    </div>
  );
}
