import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        description="$5 for 5 email credits"
        name="Survey App"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={token => console.log(token)}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
