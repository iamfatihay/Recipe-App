import React, { useContext, useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { logOut, currentUser } = useContext(AuthContext);
  const [acik, setAcik] = useState(false);

  return (
    <Nav>
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
      </Menu>
    </Nav>
  )
}

export default Navbar;