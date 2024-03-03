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
  // Data artikel berisi informasi huruf dan gambar yang sesuai
  const dataArtikel = [
    { huruf: "a", judul: "Artaksa huruf ᮃ", gambar: "Abdas.png" },
    { huruf: "i", judul: "Artaksa huruf ᮄ", gambar: "Abdas.png" },
    { huruf: "u", judul: "Artaksa huruf ᮅ", gambar: "Abdas.png" },
    { huruf: "eu", judul: "Artaksa huruf ᮉ", gambar: "Abdas.png" },
    { huruf: "o", judul: "Artaksa huruf ᮈ", gambar: "gold.png" },
    { huruf: "e", judul: "Artaksa huruf ᮇ", gambar: "bayi.png" },
    { huruf: "p", judul: "Artaksa huruf ᮆ", gambar: "bayi.png" },
  ];

  return (
    <div>
      <h1 className="font-bold text-5xl text-center mt-5">Artaksa</h1>
      <h1 className="text-2xl text-center mt-3 mb-5">Artikel Aksara</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        {dataArtikel.map((artikel) => (
          <Link key={artikel.huruf} href={`/artikel/${artikel.huruf}`}>
            <Card className="mx-3">
              <CardHeader>
                <h1>{artikel.judul}</h1>
              </CardHeader>
              <CardBody>
                <Image
                  isZoomed
                  src={`../../../public/images/${artikel.gambar}`}
                  className="shadow"
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
