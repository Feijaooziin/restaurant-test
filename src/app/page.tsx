import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ButtonRota from "./_components/buttonRota";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 p-3">
      <div>
        <Avatar className="h-16 w-16">
          <AvatarImage src="logo.png" />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-5 p-2">
        <h1 className="text-2xl font-semibold uppercase">Escolha uma tela:</h1>
        <div className="grid w-fit grid-cols-2 gap-5">
          <ButtonRota text="Mesa 1" rota="mesa1" />
          <ButtonRota text="Mesa 2" rota="mesa2" />
          <ButtonRota text="Mesa 3" rota="mesa3" />
          <ButtonRota text="Mesa 4" rota="mesa4" />
          <ButtonRota text="Mapa de mesas" rota="mapa" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
