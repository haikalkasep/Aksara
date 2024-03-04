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
import A from "../../../../public/images/AAksara.png";
import Abdi from "../../../../public/images/Abdi.jpg";
import Abdas from "../../../../public/images/AbdasAksara.png";
import Vokalisasi from "../../../../public/images/avokal.png";

export default function ArtikelA() {
  return (
    <>
      <div className="flex mb-5">
        <Back />
      </div>
      <div className="flex justify-center">
        <Card className="">
          <Image src={A} className="w-44" />
          <h1 className="text-center mb-3 text-1xl">
            Cara Pengucapan :<br />
            <h1 className="font-bold text-2xl">a</h1>
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
          <Image src={Abdi} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="">a</h1> <h1 className="mx-10">b</h1>{" "}
              <h1 className="">di</h1>
            </div>
          </h1>
          <Image src={Abdas} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-10">a</h1> <h1 className="mr-5">b</h1>{" "}
              <h1 className="mr-7 ml-6">da</h1> <h1>s</h1>
            </div>
          </h1>
          </div>
        </Card>
      </div>
    </>
  );
}
