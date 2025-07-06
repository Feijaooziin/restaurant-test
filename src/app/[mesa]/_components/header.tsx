import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderMesaProps {
  logo: string;
  logoName: string;
  name: string;
}

const HeaderMesa = ({ logo, logoName, name }: HeaderMesaProps) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-400 p-3">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={logo} />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold uppercase">{logoName}</h1>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-1">
        <h1 className="text-lg font-semibold capitalize">{name} |</h1>
        <Link className="capitalize text-gray-500" href={"./"}>
          Sair
        </Link>
      </div>
    </div>
  );
};

export default HeaderMesa;
