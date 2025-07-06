import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductMesaProps {
  nome: string;
  ocupada?: boolean;
}

const MesaCard = ({ nome, ocupada }: ProductMesaProps) => {
  return (
    <div>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>🪑{nome}</CardTitle>

            {ocupada ? (
              <div className="flex items-center gap-1">
                <h1 className="text-xl font-semibold">Ocupada</h1>
                <p>🔴</p>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <h1 className="text-xl font-semibold">Livre</h1>
                <p>🟢</p>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MesaCard;
