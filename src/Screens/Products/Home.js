import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import SMNavbar from "../Components/Navbar"
import { ProductsData } from "./ProductsData";
import '../../App.css'

const Home = () => {


    return <>
        <SMNavbar />
        <div className="container mt-4">

            <Row className="mx-auto p-3 mt-2">
                {ProductsData.map((products) => (

                    <Col md={3} col={12} className="gy-3" key={products.id} >
                        <Card >
                            <a href={`/products/${products.id}`}>
                                <Card.Img src={products.img} className="img-fluid img" variant="top" />
                            </a>

                            <Card.Body >
                                <Card.Title>{products.car}</Card.Title>
                                <h6>Model:{products.car_model}</h6>
                                <span>{products.price}</span>
                            </Card.Body>

                        </Card>

                    </Col>

                ))
                }
            </Row>

        </div>
    </>
}

export default Home;