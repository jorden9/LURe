import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../slices/cartSlices';
import statesInIndia from '../states';
//import Checkout from '../components/Checkout';

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address1, setAddress1] = useState(shippingAddress?.address1 || '');
  const [address2, setAddress2] = useState(shippingAddress?.address2 || '');

  const [city, setCity] = useState(shippingAddress?.city || '');
  const [pinCode, setPostalCode] = useState( shippingAddress?.pinCode || '' );
  const [contactDetail, setcontactDetail] = useState(shippingAddress?.contactDetail|| '');
  const [state, setState] = useState(shippingAddress?.state || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address1,address2, city, pinCode, contactDetail, state }));
    navigate('/payment');
  };

  return (
    <FormContainer>
   
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='address1'>
          <Form.Label>FLat / House-no / Floor / Building </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address1}
            required
            onChange={(e) => setAddress1(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='address2'>
          <Form.Label>Area / Sector / Locality / Landmark</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address2}
            required
            onChange={(e) => setAddress2(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='state'>
      <Form.Label>State</Form.Label>
      <Form.Control
        as='select'
        value={state}
        required
        onChange={(e) => setState(e.target.value)}
      >
        <option value=''>Select State</option>
        {statesInIndia.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </Form.Control>
    </Form.Group>

        <Form.Group className='my-2' controlId='pinCode'>
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter pin code'
            value={pinCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='contactDetail'>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter phone number'
            value={contactDetail}
            required
            onChange={(e) => setcontactDetail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        

        <Button type='submit' variant='primary' style={{ backgroundColor: 'black' }}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;