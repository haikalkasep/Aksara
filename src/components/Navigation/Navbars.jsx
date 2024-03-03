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
} from "@nextui-org/react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const disclosure = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-sm bg-slate-100">
      <NavbarContent>
        <RxHamburgerMenu
          size="2em"
          className="cursor-pointer"
          onClick={onOpen}
        />

        {/* Drawer => Gambar */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              className="flex justify-between"
              borderBottomWidth="1px"
            >
              <Link className="font-bold text-inherit">
                <a href="/">Aksara</a>
              </Link>
              <IoCloseSharp
                className="cursor-pointer"
                size="2em"
                onClick={onClose}
              />
            </DrawerHeader>
            <DrawerBody>
              <NavbarItem>
                <Link color="foreground" href="/materi">
                  ᮙᮒᮨᮛᮤ
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/quiz  ">
                  ᮋᮥᮄᮐ᮪
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/artikel  ">
                  ᮃᮛ᮪ᮒᮤᮊᮨᮜ᮪
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Link href="/login">ᮙᮃᮞᮥᮊ᮪</Link>
              </NavbarItem>
              <NavbarItem>
                <Link as={Link} color="primary" href="/register" variant="flat">
                  ᮃᮊᮥᮔ᮪
                </Link>
              </NavbarItem>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <NavbarBrand>
          <p className="font-bold text-inherit">
            <a href="/">Aksara</a>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/materi">
            ᮙᮒᮨᮛᮤ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/quiz  ">
            ᮋᮥᮄᮐ᮪
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/artikel  ">
            ᮃᮛ᮪ᮒᮤᮊᮨᮜ᮪
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page"></Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#"></Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">ᮙᮃᮞᮥᮊ᮪</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            ᮃᮊᮥᮔ᮪
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </Navbar>
  );
}
