import { useEffect ,useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import  Loader from "../components/Loader.jsx"
import Message from '../components/Message.jsx';
import { useGetProductQuery } from '../slices/productApiSlice.js';
const HomeScreen = () => {
  //   const [ products, setproducts] =useState([]);
  //  useEffect(()=>{
  //           const fetchproduct = async()=>{
  //             const {data} = await axios.get('/productlist')
  //             setproducts(data);
  //           }
  //           fetchproduct();
  //         }, [ ])
  const { data: products, isLoading , isError} = useGetProductQuery();
   
   return (
    <>
      { isLoading ? (
        <Loader/>
      ): isError ? (<Message variant="danger">
       { isError?.data.message || isError.error}
      </Message>
      ): (
        <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={15} md={8} lg={4} xl={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>) }

    
    </>
  );
};

export default HomeScreen;