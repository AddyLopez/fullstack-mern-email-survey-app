import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <ReactStripeCheckout
        amount={500} // amount in cents
        description="Pay $5 for 5 email credits"
        name="Inquire"
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button>Add Credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default Payments;
