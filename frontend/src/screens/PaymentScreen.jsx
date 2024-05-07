import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
//import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../slices/cartSlices';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    // if (!shippingAddress.address) {
    //   navigate('/shipping');
    // }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
    <h1>Payment Method</h1>
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label as='legend'>Select Method</Form.Label>
        <Col>
          <Form.Check
            className='my-2'
            type='radio'
            label='UPI Payment'
            id='UPI'
            name='paymentMethod'
            value='UPI'
            checked={paymentMethod === 'UPI'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Form.Check
            className='my-2'
            type='radio'
            label='Net Banking'
            id='NetBanking'
            name='paymentMethod'
            value='NetBanking'
            checked={paymentMethod === 'NetBanking'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Form.Check
            className='my-2'
            type='radio'
            label='Cash on Delivery (COD)'
            id='COD'
            name='paymentMethod'
            value='COD'
            checked={paymentMethod === 'COD'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Form.Check
            className='my-2'
            type='radio'
            label='Card Payment'
            id='Card'
            name='paymentMethod'
            value='Card'
            checked={paymentMethod === 'Card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Button type='submit' variant='primary'>
        Continue
      </Button>
    </Form>
  </FormContainer>
);
};

export default PaymentScreen;