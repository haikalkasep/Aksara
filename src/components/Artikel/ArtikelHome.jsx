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

export default function ArtikelHome() {
  return (
    <div>
      <h1 className="font-bold text-5xl text-center mt-5">Artaksa</h1>
      <h1 className="text-2xl text-center mt-3 mb-5">Artikel Aksara</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/artikel/a">
          <Card className="mx-3">
            <CardHeader>
              <h1>Artaksa huruf ᮃ</h1>
            </CardHeader>
            <CardBody>
              <Image
                isZoomed
                src="../../../public/images/Abdas.png"
                className="shadow"
              />
            </CardBody>
          </Card>
        </Link>
        <Link>
          <Card className="mx-3">
            <CardHeader>
              <h1>Artaksa huruf ᮃ</h1>
            </CardHeader>
            <CardBody>
              <Image
                isZoomed
                src="../../../public/images/Abdas.png"
                className="shadow"
              />
            </CardBody>
          </Card>
        </Link>
        <Link>
          <Card className=" mx-3">
            <CardHeader>
              <h1>Artaksa huruf ᮃ</h1>
            </CardHeader>
            <CardBody>
              <Image
                isZoomed
                src="../../../public/images/Abdas.png"
                className="shadow"
              />
            </CardBody>
          </Card>
        </Link>
        <Link>
          <Card className="mx-3">
            <CardHeader>
              <h1>Artaksa huruf ᮃ</h1>
            </CardHeader>
            <CardBody>
              <Image
                isZoomed
                src="../../../public/images/Abdas.png"
                className="shadow"
              />
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}
