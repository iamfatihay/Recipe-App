import React, { useContext, useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { logOut, currentUser } = useContext(AuthContext);
  const [acik, setAcik] = useState(false);
  //!!  setAcık stile props yollayınca dropdown ı açılır kapanır yapmış oluyor, height a 300px yada 0 vererek
  return (
    <Nav>
      {/* logo daki setAcik ayrıntı bişey merdiven açıkken home a basılırsa kapansın diye*/}
      <div className="pl-10">
        <Logo to="/home" onClick={() => setAcik(false)}>
          <i>{"<Fatih Ay>"}</i>
          {/* tag lere özel < işaretlerini string gibi kullanmak istersek üstteki syntax la yazarız */}
        </Logo>
      </div>


      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={acik} onClick={() => setAcik(false)}>
        <div className="sekme" >
          <MenuLink to="/about">About</MenuLink>
        </div>
        <div className="sekme ">
          <a href="https://github.com/iamfatihay" target="blank">
            Github
          </a>
        </div>
        {currentUser ? (<div className="sekme">
          <MenuLink to="/" onClick={() => logOut()} >Logout</MenuLink>
        </div>): null}
        

        {/* github linki için a tag i yerine, react-router-dom dan Link kullanmak istersek, alttaki yorumları açmalıyız */}
        {/* <MenuLink
          to="/external"
          target="_blank"
        >Github</MenuLink> */}


      </Menu>
    </Nav>
  )
}

export default Navbar;