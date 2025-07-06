import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ButtonRotaProps {
  text: string;
  rota: string;
}

const ButtonRota = ({ text, rota }: ButtonRotaProps) => {
  return (
    <Button className="flex h-full items-center rounded-xl p-2 text-xl">
      <Link href={`./${rota}`} className="flex items-center gap-6 capitalize">
        {text}
      </Link>
    </Button>
  );
};

export default ButtonRota;
