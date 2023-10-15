import type { NextPage } from "next";
import Image from "next/image";
import shipforgood_logo from '@/public/shipforgood_logo.jpg'
import Link from "next/link";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({className}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <Link href="/">
        <Image src={shipforgood_logo} alt="ShipForGood logo with text" priority={false}/>
      </Link>
    </div>
  );
};

export default Logo;
