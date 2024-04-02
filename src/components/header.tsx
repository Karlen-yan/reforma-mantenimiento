'use client';
import { useState } from "react";
import Container from "./shared/container";
import MainMenu from "./menu/main-menu";
import Logo from "./shared/logo";
import MenuMobile from "./menu/menu-mobile";
import { RiAlignRight } from "react-icons/ri";

const Header = () =>{
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="flexed left-0 top-0 w-full p-3 z-40 bg-primary">
       <Container className="flex justify-between items-center ">
        <section className="w-[40%]">
          <Logo />
          </section>
        <section className="hidden lg:block w-[60%] ">
           <MainMenu />
         </section>
        <section className="lg:hidden">
          <button type="button" onClick={()=> setShowMenu(true)} className="text-white">
          <RiAlignRight size={24} />
          </button>
        </section>
       </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={()=> setShowMenu(false)} />

    </>
  );
}

export default Header;