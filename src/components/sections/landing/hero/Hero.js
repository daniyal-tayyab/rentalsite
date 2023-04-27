import React from "react";

import { Container, ContectSection, MediaSection } from "./Hero.styles";
import Button from "../../../button/Button";

const Hero = () => {
  return (
    <Container>
      <ContectSection>
        <h1>Search and find your best rental product with easy way</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <Button type="primary">Booking now</Button>
          <Button type="inverted">See all products</Button>
        </div>
      </ContectSection>
      <MediaSection></MediaSection>
    </Container>
  );
};

export default Hero;
