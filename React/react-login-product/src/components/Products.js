import axios from "axios";
import React, { useEffect, useState } from "react";
import Cardbody from "../Cardbody";
import { Row } from "reactstrap";


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
          <Cardbody product={product}/>
        ))}
      </Row>
    </div>
  );
}
