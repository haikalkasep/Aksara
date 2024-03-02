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
            <h1 className="font-bold">A</h1>
          </h1>
        </Card>
      </div>
      <div className="flex justify-center mt-5">
        <Card>
            <h1 className="mx-5 mt-3">Contoh Penggunaan :</h1>
          <Image src={Abdi} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-5">a</h1> <h1 className="mx-16">b</h1> <h1 className="ml-5">di</h1>
            </div>
          </h1>
        </Card>
      </div>
    </>
  );
}
