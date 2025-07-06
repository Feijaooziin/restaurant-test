import HeaderMesa from "./_components/header";
import MesaCard from "./_components/mesaCard";

const TelaMesa = async () => {
  return (
    <div className="flex h-full flex-col gap-8">
      {/* Header */}
      <HeaderMesa
        logo="logo.png"
        logoName="Feijão Brguer"
        name="mapa de mesas"
      />

      {/* Main */}
      <div className="mb-3 flex flex-col gap-5 px-3">
        {/* Produtos */}
        <div className="space-y-3">
          <MesaCard nome="Mesa 1" ocupada />
          <MesaCard nome="Mesa 2" ocupada />
          <MesaCard nome="Mesa 3" />
          <MesaCard nome="Mesa 4" ocupada />
          <MesaCard nome="Mesa 5" />
          <MesaCard nome="Mesa 6" ocupada />
        </div>
      </div>
    </div>
  );
};

export default TelaMesa;
