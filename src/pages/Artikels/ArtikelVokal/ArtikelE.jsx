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
import Back from "../Back.jsx";
import E from "images/AksaraE.png";
import Eneg from "images/Eneg.png";
import Emas from "images/emas.png";
import Vokalisasi from "images/vokalE.png";

export default function ArtikelA() {
  return (
    <>
      <div className="flex mb-5">
        <Back />
      </div>
      <div className="flex justify-center">
        <Card className="">
          <Image src={E} className="w-44" />
          <h1 className="text-center mb-3 text-1xl">
            Cara Pengucapan :<br />
            <h1 className="font-bold text-2xl">e</h1>
          </h1>
        </Card>
      </div>
      <div className="flex justify-center mt-5">
        <Card>
          <h1 className="mx-5 mt-3">Bentuk Vokalisasi :</h1>
          <Image src={Vokalisasi} className="w-80" />
        </Card>
      </div>
      <div className="flex justify-center mt-5 mb-24">
        <Card>
          <h1 className="mx-5 mt-3">Contoh Penggunaan :</h1>
          <div className="mt-5">
          <Image src={Eneg} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="ml-">e</h1> <h1 className="mx-9">ne</h1>{" "}
              <h1 className="">g</h1>
            </div>
          </h1>
          <Image src={Emas} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-6">e</h1> <h1 className="mr-0">ma</h1>{" "}
              <h1 className="mr-3 ml-8">s</h1> 
            </div>
          </h1>
          </div>
        </Card>
      </div>
    </>
  );
}
