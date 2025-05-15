import React from 'react'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

export default function Cardbody({product}) {
  return (
    <div>
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
    </div>
  )
}
