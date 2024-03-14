/* eslint-disable prettier/prettier */
import { Header } from "@/components/header/header";
import { CartProvider } from "@/context/cart/cart";
import { ReactNode } from "react";

export default function StoreRootLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="w-full max-w[1600px] mx-auto grid min-h-screen  grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
