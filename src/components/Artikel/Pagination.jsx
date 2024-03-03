import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";

export default function Pagination() {
  return (
    <div className="flex m-5 justify-center mb-24">
      <Link href="/artikel/a" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮃ
        </Button>
      </Link>
      <Link href="/artikel/i" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮄ
        </Button>
      </Link>
      <Link href="/artikel/u" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮅ
        </Button>
      </Link>
      <Link href="/artikel/e" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮈ
        </Button>
      </Link>
      <Link href="/artikel/o" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮇ
        </Button>
      </Link>
      <Link href="/artikel/eu" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮉ
        </Button>
      </Link>
      <Link href="/artikel/é" className="m-1.5">
        <Button isIconOnly className="bg-sky-500 font-bold text-white">
          ᮆ
        </Button>
      </Link>
    </div>
  );
}
