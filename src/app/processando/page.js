import { MoveRight } from "lucide-react";

export default function Processing() {
  return (
    <div className="bg-[linear-gradient(180deg,#240302_0%,#9f0e0f_100%)] w-full min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-7">
        <div className="text-center space-y-3 mt-4">
          <MoveRight className="mx-auto text-white animate-pulse" size={72} />

          <h1 className="text-4xl font-bold text-white">
            Pagamento <span className="text-neutral-900">em Processamento…</span>
          </h1>

          <p className="text-base max-w-xl text-white/90">
            Estamos confirmando seu pagamento. Isso costuma levar apenas alguns segundos.
            Você será redirecionado automaticamente quando estiver tudo pronto.
          </p>
        </div>
      </div>
    </div>
  );
}
