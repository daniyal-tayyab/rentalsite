import React from "react";

import { Card, PriceContainer, Title } from "./ProductCard.styles";
import Button from "../button/Button";

import { MdLocationPin } from "react-icons/md";
import drillMachine from "../../assets/images/products/product4.jpg";

const ProductCard = ({ product }) => {
  const { image, price, location, title } = product;

  return (
    <Card>
      <img src={image} alt={title} />
      <PriceContainer>
        <p>
          <span>$</span>
          {price} / days
        </p>
        <span>
          <MdLocationPin /> {location}
        </span>
      </PriceContainer>
      <Title>{title}</Title>
      <Button type="inverted">Book now</Button>
    </Card>
  );
};

export default ProductCard;
