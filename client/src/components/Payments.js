import React,{Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Payments extends Component{
    render(){
        //debugger;
        return(
            <StripeCheckout 
                name="Emaily"
                description="for credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PK}
            >
            <button className="btn"> Add Credits</button>
            </StripeCheckout>
        )
    }
}


export default connect(null, actions)(Payments);