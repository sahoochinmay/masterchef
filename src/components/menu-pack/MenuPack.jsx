import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

import ProductCard from "../product-card/ProductCard";
import {
  vegFoodProducts,
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  dessertProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";
import "./menu-pack.css";

const MenuPack = () => {
  const [filter, setFilter] = useState("Non-Veg");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "Veg") {
      setProducts(vegFoodProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }

    if (filter === "COFFEE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "Veg" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("Veg")}
            >
              Veg
            </button>
            <button
              className={`filter-btn ${
                filter === "RICE-MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Rice Menu
            </button>
            <button
              className={`filter-btn ${
                filter === "PIZZA" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("PIZZA")}
            >
              Pizza
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Chinese & Tandoor
            </button>
            <button
              className={`filter-btn ${
                filter === "COFFEE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("COFFEE")}
            >
              Roti & Rice
            </button>
          </Col>

          {products.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
