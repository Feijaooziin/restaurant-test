import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-red-500 p-3">
      <div>
        <Avatar className="h-16 w-16">
          <AvatarImage src="logo.png" />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-5 rounded-xl border border-blue-500 p-2">
        <h1 className="text-2xl">Nome:</h1>
        <Input placeholder="Digite seu Nome..." />
        <Button className="w-fit" variant="default">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
