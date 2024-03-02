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

export default function Back() {
  return (
    <Link href="/artikel">
      <Button className="bg-sky-500 ml-3 font-bold text-white mt-5">
        Kembali
      </Button>
    </Link>
  );
}
