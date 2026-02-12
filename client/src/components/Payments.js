import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <ReactStripeCheckout
        amount={500} // amount in cents
        description="Pay $5 for 5 email credits"
        name="Inquire"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button>ADD CREDITS</button>
      </ReactStripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
