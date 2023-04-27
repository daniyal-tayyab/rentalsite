import React, { useState } from "react";

import Button from "../button/Button";
import DropdownItem from "../dropdown/DropdownItem";

import ArrowDown from "../../assets/images/icon-arrow-down.svg";
import menuIcon from "../../assets/images/icon-menu.svg";

import {
  Container,
  Navigation,
  AuthSection,
  Services,
  MenuIcon,
  Logo,
} from "./Header.styles";

import { features } from "./data";
import Drawer from "../drawer/Drawer";

const Header = () => {
  const [toggleFeatures, setToggleFeatures] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleFeatures = () =>
    setToggleFeatures((prevState) => !prevState);

  const handleToggleCompany = () => setToggleCompany((prevState) => !prevState);

  const handleToggleDrawer = () => setToggleDrawer((prevState) => !prevState);

  return (
    <Container>
      <Logo>Rental Site</Logo>
      <Navigation>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li onClick={handleToggleFeatures}>
            Services
            <img
              src={ArrowDown}
              alt="open"
              className={toggleFeatures ? "rotate" : ""}
            />
          </li>
          <Services toggleFeatures={toggleFeatures}>
            {features.map((feature, index) => (
              <DropdownItem
                key={index}
                icon={feature.icon}
                title={feature.title}
              />
            ))}
          </Services>
          <li>Blog</li>
        </ul>
      </Navigation>
      <AuthSection>
        <Button type="black">Contact Us</Button>
      </AuthSection>
      <MenuIcon onClick={handleToggleDrawer}>
        <img src={menuIcon} alt="menu" />
      </MenuIcon>
      <Drawer open={toggleDrawer} handleToggleDrawer={handleToggleDrawer} />
    </Container>
  );
};

export default Header;
