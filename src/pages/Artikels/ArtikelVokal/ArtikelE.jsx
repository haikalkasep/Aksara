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
import Back from "../../../components/Artikel/Back.jsx";
import O from "../../../../public/images/AksaraO.png";
import Omat from "../../../../public/images/Omat.png";
import Orok from "../../../../public/images/Orok.png";
import Vokalisasi from "../../../../public/images/VokalO.png";

export default function ArtikelA() {
  return (
    <>
      <div className="flex mb-5">
        <Back />
      </div>
      <div className="flex justify-center">
        <Card className="">
          <Image src={O} className="w-44" />
          <h1 className="text-center mb-3 text-1xl">
            Cara Pengucapan :<br />
            <h1 className="font-bold text-2xl">o</h1>
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
          <Image src={Omat} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-8">o</h1> <h1 className="mr-10 nl-5">ma</h1>{" "}
              <h1 className="mr-3 nl-1">t</h1>
            </div>
          </h1>
          <Image src={Orok} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-10">o</h1> <h1 className="mr-5">ro</h1>{" "}
              <h1 className="mr-7 ml-6">k</h1>
            </div>
          </h1>
          </div>
        </Card>
      </div>
    </>
  );
}
