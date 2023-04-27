import React from "react";

import Button from "../button/Button";

import {
  Container,
  ContactSection,
  FooterNav,
  Nav,
  SoicalLinks,
} from "./Footer.styles";

import { BsFacebook } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import { GrInstagram } from "react-icons/gr";
import { RxDiscordLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <Container>
      <ContactSection>
        <h3>Pick your best product today</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <Button type="primary">Book now</Button>
      </ContactSection>
      <FooterNav>
        <Nav>
          <p>Rental Site</p>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
          <SoicalLinks>
            <span>
              <GrInstagram style={{ width: "50%", height: "50%" }} />
            </span>
            <span>
              <BsFacebook style={{ width: "50%", height: "50%" }} />
            </span>
            <span>
              <RxTwitterLogo style={{ width: "50%", height: "50%" }} />
            </span>
            <span>
              <RxDiscordLogo style={{ width: "50%", height: "50%" }} />
            </span>
          </SoicalLinks>
        </Nav>
      </FooterNav>
    </Container>
  );
};

export default Footer;
