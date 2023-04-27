import React from "react";

import { Card } from "./ServiceCard.styles";

import fast from "../../assets/images/fast.png";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <Card>
      <img src={icon} alt="fast" />
      <h4>{title}</h4>
      <p>{description}</p>
    </Card>
  );
};

export default ServiceCard;
