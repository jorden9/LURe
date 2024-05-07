export const updateCart = (state)=>{
          // cart price
          state.itemPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

          // shipping price 
          state.shippingPrice = 50;
          
          //total
           state.totalPrice=(Number(state.itemPrice) + Number(state.shippingPrice))
          
  
           localStorage.setItem("cart", JSON.stringify(state));
           return state;

        }