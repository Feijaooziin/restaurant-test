import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-2xl">Nome:</h1>
      <Input placeholder="Digite seu Nome..." />
      <Button variant="default">Enviar</Button>
    </div>
  );
};

export default HomePage;
