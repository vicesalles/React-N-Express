import React,{Component} from 'react';
import {connect} from 'react-redux';
import {handlePayment} from '../state/actions';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends Component{
    render(){
        return( 
        <StripeCheckout 
        name="Emailejador"
        description="Afegeix 5 crèdits al teu compte"
        amount={500} 
        currency="EUR"
        token={token=>this.props.dispatch(handlePayment(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        ><button className="btn">Add Credits</button></StripeCheckout>
    )
    }
}

export default connect()(Stripe);