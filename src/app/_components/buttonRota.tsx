import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ButtonRotaProps {
  text: string;
  rota: string;
}

const ButtonRota = ({ text, rota }: ButtonRotaProps) => {
  return (
    <Link href={`./${rota}`} className="flex items-center gap-6 capitalize">
      <Button className="flex h-full w-full items-center rounded-xl p-2 text-xl">
        {text}
      </Button>
    </Link>
  );
};

export default ButtonRota;
