import React from "react";

import foto from "../../../public/images/aksara-sunda.png";
import bg from "../../../public/images/bg.png";
import Artikel from "../../pages/Artikels/Artikel.jsx";

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
} from "@nextui-org/react";

export default function HomeComponent() {
  return (
    <>
      <div className="flex justify-center">
        <div className="lg:flex justify-center absolute xl:mt-5">
          <div>
            <h1 className="font-bold text-5xl mt-24 text-center lg:text-left">
              Mari Belajar <br /> Aksara Sunda! <br />
            </h1>
            <h1 className="mt-5 text-center lg:text-left">
              "Peran budaya adalah bentuk yang melaluinya kita <br /> sebagai
              masyarakat merefleksikan siapa kita,
              <br /> di mana kita pernah berada, di mana kita berharap."
              <br /> - Wendell Pierce
            </h1>
            <div className="flex justify-center lg:justify-start">

              <Link href="/artikel">
                <Button className="bg-white font-bold text-sky-500 mt-5">
                  Mulai belajar
                </Button>
              </Link>

            </div>
          </div>

          <div className="mt-96 lg:mt-0">
            <img src={foto} width={500} className="static lg:mt-0" />
          </div>
        </div>
      </div>
      <img
        src={bg}
        className="h-screen w-screen object-cover lg:w-screen lg:h-auto"
      />
    </>
  );

}

