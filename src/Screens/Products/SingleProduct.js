import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { ProductsData } from "./ProductsData";
import {useParams} from 'react-router-dom'
import { Button } from "@mui/material";
import SMNavbar from "../Components/Navbar";

const SingleProductPage = ()=>{

    const {id} = useParams()

    const Products = ProductsData.find((x)=>x.id === Number(id) )
    console.log(Products)
    return<>
    <SMNavbar />
    <div>
        <Row className="mx-auto"> 

        <Col md={6} className="mt-5 ">
            <Image src={Products.img} alt={Products.car} fluid />
            
        </Col>
        <Col md={3} className="mt-5 text-center">
            <ListGroup  variant="flush">
                <ListGroupItem>
                    <h3>{Products.car}</h3>
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Color:{Products.car_color}</h5>
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Make-Year:{Products.car_model_year}</h5>
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Serial-No:{Products.car_vin}</h5>
                </ListGroupItem>

                <ListGroupItem>
                    <h5>Price:{Products.price}</h5>
                </ListGroupItem>
            </ListGroup>
            <Button variant="contained  " color="primary"> Book Now</Button>
        </Col>
        <Col></Col>
        </Row>
    </div>
    </>

}
export default SingleProductPage;