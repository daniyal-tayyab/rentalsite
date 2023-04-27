import React from "react";

import ProductCard from "../../../product-card/ProductCard";
import Button from "../../../button/Button";

import { CardContainer, Container, ViewMore } from "./Collection.styles";

import p1 from "../../../../assets/images/products/product1.jpg";
import p2 from "../../../../assets/images/products/product2.jpg";
import p3 from "../../../../assets/images/products/product3.jpg";
import p4 from "../../../../assets/images/products/product4.jpg";

const products = [
  {
    image: p1,
    price: "82.5",
    location: "Dubai",
    title: "Wood Cutter",
  },
  {
    image: p4,
    price: "50.0",
    location: "Dubai",
    title: "Drill Machine",
  },
  {
    image: p2,
    price: "90.0",
    location: "Dubai",
    title: "Wall Saw Cutter",
  },
  {
    image: p3,
    price: "72.5",
    location: "Dubai",
    title: "Demolition Machine",
  },
  {
    image: p1,
    price: "82.5",
    location: "Dubai",
    title: "Wood Cutter",
  },
  {
    image: p4,
    price: "50.0",
    location: "Dubai",
    title: "Drill Machine",
  },
  {
    image: p2,
    price: "90.0",
    location: "Dubai",
    title: "Wall Saw Cutter",
  },
];

const Collection = () => {
  return (
    <Container>
      <span>Collection</span>
      <h2>Our Products</h2>
      <CardContainer>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </CardContainer>
      <ViewMore>
        <Button type="primary">View all products</Button>
      </ViewMore>
    </Container>
  );
};

export default Collection;
