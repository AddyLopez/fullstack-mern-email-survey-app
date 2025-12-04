import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    debugger;

    return (
      <ReactStripeCheckout
        amount={500} // amount in cents
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
