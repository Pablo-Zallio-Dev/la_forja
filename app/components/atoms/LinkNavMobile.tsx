import Link from "next/link";
import React from "react";

export default function LinkNavMobile({
  href,
  label,
  number,
  onClick,
}: {
  href: string;
  label: string;
  number: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      aria-label="Abrir menú de navegación"
      className=" flex items-center justify-between min-h-16 border-b border-border font-archivo-black font-black text-xl uppercase "
      onClick={onClick}
    >
      {label}
      <p className=" font-barlow text-[10px] text-primary  ">{number}</p>
    </Link>
  );
}
