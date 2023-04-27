import React from "react";

import { Container, Cover, CardContainer, Title } from "./Services.styles";
import ServiceCard from "../../../service-card/ServiceCard";

import fast from "../../../../assets/images/fast.png";
import quality from "../../../../assets/images/quality.png";
import exculsive from "../../../../assets/images/exclusive.png";

const services = [
  {
    icon: fast,
    title: "Fast and Safe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: quality,
    title: "Quality Choice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: exculsive,
    title: "Exclusive Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = () => {
  return (
    <Container>
      <Cover>
        <Title>Our services</Title>
        <h2>
          We have best service <span>for rent construction products</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut{" "}
          <span>
            labore et dolore magna aliqua. orem ipsum dolor sit amet,
            consectetur adipiscing elit
          </span>
        </p>
      </Cover>
      <CardContainer>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Services;
