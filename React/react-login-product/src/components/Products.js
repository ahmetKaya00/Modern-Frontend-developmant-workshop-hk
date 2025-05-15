import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

export default function Products() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error("API Hatası:", err));
  }, []);
  return (
    <div className="container mt-5">
      <Row>
        {product.map((product) => (
          <Col sm="6" md="4" lg="3" key={product.id} className="mb-4">
            <Card style={{ height: "100%" }}>
              <CardImg
                top
                width="100%"
                src={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              ></CardImg>
              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
