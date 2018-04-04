import React, { Component } from 'react';
import {Cartreducer} from '../reducers/cartReducer';
import connect from 'react-redux/lib/connect/connect';
import NavLink from 'react-router-dom/NavLink';

class Cart extends Component{

    constructor(props){
console.log("cart constructor....");

        super(props);
        console.log("cartprops",this.props);
        this.cartList=[];
        this.state={cartList: this.cartList};
    }

    componentDidMount(){

        console.log("componentdidmount of cart....");
this.cartList.forEach(cartitem=>{

    // if(cartitem.id==this.props.cartItem.id){

    //     cartitem.quantity++;
    // }

    // else if(this.cartList.length==0){
    //     this.cartList.push(cartitem);
    // }

    // else{

    //     this.cartList.push(cartitem);
    // }
    this.cartList.push(cartitem);
    this.setState({cartList: this.cartList});
    console.log("cartlist",this.state.cartList);
})

this.setState({cartList: this.cartList});
    }

    render(){

        console.log("render of cart called...."); 
               return (<div>

<table className="table table-bordered">
    <thead>
        <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
        </tr>
    </thead>

    <tbody>
        <tr>
<td>{ this.props.cartItem.id }</td>
<td>{this.props.cartItem.name}</td>
<td>{this.props.cartItem.price}</td>
<td>{this.props.cartItem.quantity}</td>

        </tr>
    </tbody>
</table>

{ this.props.cartItem.name }

<div><NavLink to="/products/">BACK</NavLink></div>
        </div>)
    }
}


const mapStateToProps=state=> {

    console.log("gg we got it...",state);
    return{

        cartItem: state.Cartreducer.cart
    }
}

export default connect(mapStateToProps)(Cart);