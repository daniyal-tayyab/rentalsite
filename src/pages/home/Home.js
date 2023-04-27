import React from "react";

import { Container } from "./Home.styles";
import Hero from "../../components/sections/landing/hero/Hero";
import About from "../../components/sections/landing/about/About";
import Services from "../../components/sections/landing/services/Services";
import Collection from "../../components/sections/landing/collection/Collection";

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Services />
      <Collection />
    </Container>
  );
};

export default Home;
