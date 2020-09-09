import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from '../images/logo.png'


const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_RHYy2R8AWpGlzcb2vTcFWMRS00Xi9wguFc";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="THUNDER SHOP Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;