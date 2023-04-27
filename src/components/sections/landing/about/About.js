import React from "react";

import { Container, MediaSection, ContentSection } from "./About.styles";

import Button from "../../../button/Button";

const About = () => {
  return (
    <Container>
      <MediaSection></MediaSection>
      <ContentSection>
        <span>About us</span>
        <h2>More than 150+ special rental products collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button type="primary">View all products</Button>
      </ContentSection>
    </Container>
  );
};

export default About;
