import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { db } from "@/lib/prisma";

import HeaderMesa from "./_components/header";
import ProductMesa from "./_components/product";

interface TelaMesaProps {
  params: Promise<{ mesa: string }>;
}

const TelaMesa = async ({ params }: TelaMesaProps) => {
  const { mesa } = await params;
  const mesaInfo = await db.mesa.findUnique({ where: { slug: mesa } });

  if (!mesaInfo) {
    return notFound();
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <HeaderMesa
        logo="logo.png"
        logoName="Feijão Brguer"
        name={mesaInfo.name}
      />
      <div className="space-y-2 px-3 py-4">
        {/* Input */}
        <Input className="shadow-xl" placeholder="🔍 Pesquisar no cardápio" />

        <Button className="w-full" variant="default">
          🛒 Carrinho
        </Button>

        {/* Categorias */}
        <div className="grid grid-cols-3 space-x-3">
          <Button variant="default">🍕 Pizzas</Button>
          <Button variant="outline">🍔 Lanches</Button>
          <Button variant="outline">🥤 Bebidas</Button>
        </div>
      </div>
      <ScrollArea>
        {/* Main */}
        <div className="mb-3 flex flex-col gap-5 px-3">
          {/* Produtos */}
          <div className="space-y-3">
            <ProductMesa price="29,90" name="Calabresa" />
            <ProductMesa price="29,90" name="Frango" />
            <ProductMesa price="29,90" name="Lombinho" />
            <ProductMesa price="29,90" name="Bacon" />
            <ProductMesa price="29,90" name="4 Queijos" />
            <ProductMesa price="49,90" name="Alcatra" />
            <ProductMesa price="49,90" name="Doritos" />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TelaMesa;
