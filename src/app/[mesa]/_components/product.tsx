import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductMesaProps {
  name: string;
  price: string;
}

const ProductMesa = ({ name, price }: ProductMesaProps) => {
  return (
    <div>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>🍕 {name}</CardTitle>
            <h1 className="text-xl font-semibold">R$ {price}</h1>
          </div>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          {/* Direita */}
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Ingredientes: </p>
            <p className="text-gray-600">queijo, calabresa, orégano.</p>
          </div>
          {/* Esquerda */}
          <div className="flex flex-col gap-1.5">
            <Button variant="default">Adicionar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductMesa;
