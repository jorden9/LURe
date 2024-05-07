import {  useEffect, useState } from 'react'

import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import{ Link } from "react-router-dom"
import { Row , Col, Image,  ListGroup ,Card , Button, Form} from "react-bootstrap"
import { UseDispatch, useDispatch } from 'react-redux'
import Rating from '../components/Rating.jsx'
import { useGetProductDEtailsQuery } from '../slices/productApiSlice.js'

import  Loader from "../components/Loader.jsx"
import Message from '../components/Message.jsx'
import { addToCart } from '../slices/cartSlices.js'

const ProductScreen = () => {
    //const [ product, setproducts] =useState([]);
    const {id: productId} = useParams();
 
    // const [product, setProduct] = useState({});

    // useEffect(() => {
    //   const fetchProduct = async () => {
    //     const { data } = await axios.get(`/product/${productId}`);
    //     setProduct(data);
    //   };
  
    //   fetchProduct();
    // }, [productId]);

    const dispatch = useDispatch();
    const nagivate = useNavigate();

    const [qty , setqty] = useState(1);
  
      
    const { data: product, isLoading , isError } = useGetProductDEtailsQuery(productId);
    const addToCartHanddler = ()=>{
      dispatch(addToCart({ ...product, qty}))
      nagivate("/cart");
}

  return (
    <>
            { isLoading ?
            (<Loader/>) 
            : isError ?
            (<Message variant="danger">
            { isError?.data.message || isError.error}
           </Message>)
             : ( 
             <>
                <Link to="/" className='btn btn-dark my-3' style={{ backgroundColor: 'black' }}>
                   Home page
                </Link>
           <Row>
             <Col md  ={5}>
                 <Image src={product.image} alt={product.name} fluid ></Image>
             </Col>
             <Col>
             <ListGroup variant='flush'>
                 <ListGroup.Item>
                 <h2>{product.name}</h2>
                 </ListGroup.Item>
                <ListGroup.Item>
                 <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                </ListGroup.Item>
                <ListGroup.Item>Price : ₹{product.price}</ListGroup.Item>
     
                <ListGroup.Item>Description : ₹{product.description}</ListGroup.Item>
                 </ListGroup>
             </Col>
             <Col md={4}>
                 <Card>
                     <ListGroup variant='flush'>
                     <ListGroup.Item>
                     <Row>
                       <Col>Price:</Col>
                       <Col>
                           <strong>₹{product.price}</strong>
                       </Col>
                     </Row>
                    </ListGroup.Item>
                   <ListGroup.Item>
                     <Row>
                       <Col>Status:</Col>
                       <Col>
                         {product.countInStock === 1 ? 'Only 1 left':
                         product.countInStock === 2 ? 'Only 2 left':
                         product.countInStock === 3 ? 'Only 3 left' :
                          product.countInStock > 4 ? 'In Stock' :
                         'Out Of Stock'}
                       </Col>
                     </Row>
                   </ListGroup.Item>
                   {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setqty(e.target.value)}
                          >
                            {[...Array(Math.min(product.countInStock , 5)).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                    
<ListGroup.Item>
      <Button
        className='btn-block'
        type='button'
        style={{ backgroundColor: 'black' }}
        disabled={product.countInStock === 0}
        onClick={addToCartHanddler}
      >
        {product.countInStock === 0 ? 'Pre-order' : 'Add To Cart'}
      </Button>
    </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
           </Row>
           <Link to="/" className='btn btn-dark my-3' style={{ backgroundColor: 'black' }}>
                   Home page
                </Link>
           </>)  }
           </>)}


export default ProductScreen