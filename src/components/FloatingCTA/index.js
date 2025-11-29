"use client";

import { ShoppingBag } from "lucide-react";

export default function FullWidthCardCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 cta-size">
      <div className="bg-neutral-900 w-full shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4 sm:p-5 gap-3 sm:gap-4">
          <div className="text-white font-bold text-center sm:text-left text-lg sm:text-xl">
            Comprar agora – Por tempo limitado!
          </div>
          <a
            href="https://go.ironpayapp.com.br/eyfgihfotb"
            className="flex items-center justify-center gap-2 bg-linear-to-r from-green-500 to-green-600 text-white font-bold py-3 px-5 rounded-xl shadow-2xl transform-gpu transition-all duration-200 hover:scale-105 hover:brightness-110"
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "InitiateCheckout", {
                  value: 49.9,
                  currency: "BRL",
                });
              }

              window.location.href = "https://go.ironpayapp.com.br/eyfgihfotb";
            }}
          >
            Aproveite Já <ShoppingBag className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
