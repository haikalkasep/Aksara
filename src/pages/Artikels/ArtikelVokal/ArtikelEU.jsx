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
import EU from "../../../../public/images/hurufeu.png";
import Euis from "../../../../public/images/euis.png";
import Euceu from "../../../../public/images/euceu.png";
import Vokalisasi from "../../../../public/images/vokaleu.png";

export default function ArtikelA() {
  return (
    <>
      <div className="flex mb-5">
        <Back />
      </div>
      <div className="flex justify-center">
        <Card className="">
          <Image src={EU} className="w-44" />
          <h1 className="text-center mb-3 text-1xl">
            Cara Pengucapan :<br />
            <h1 className="font-bold text-2xl">eu</h1>
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
          <Image src={Euis} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-1">eu</h1> <h1 className="mr-8 ml-5">i</h1>{" "}
              <h1 className="mr-5">s</h1>
            </div>
          </h1>
          <Image src={Euceu} className="w-80" />
          <h1 className="text-center mt- mb-5 text-2xl font-bold">
            <div className="flex justify-center">
              <h1 className="mr-5">eu</h1> <h1 className="ml-1">ceu</h1>{" "}
            </div>
          </h1>
          </div>
        </Card>
      </div>
    </>
  );
}
