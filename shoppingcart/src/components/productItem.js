import React,{Component} from 'react';
import { store } from '../store/store';
import NavLink from 'react-router-dom/NavLink';
export class Productitem extends Component{

    constructor(props){
        super(props);
    
        this.state={quantity: this.props.product.quantity,newquantity: 0};
        console.log("inside productitem...");
        console.log("props final", this.props);
}



decQuantity(){

        
    if(this.state.quantity>0){

        this.setState({quantity: this.state.quantity-1,newquantity: 10-this.state.quantity+1});
        console.log("new quantity",this.state.quantity);

    }

    else{

        alert("product unavailable....please try after sometime...");
    }

}


passData(){
  
    var cart={};
    cart.id=this.props.product.snackid;
    cart.name=this.props.product.name;
    cart.price=this.props.product.price;
    cart.quantity=this.state.newquantity;
    console.log("cart",cart);
    store.dispatch({type: 'takeit',payload: {cartitem: cart}});
      
    }

    render(){

        console.log("render of productitemcalled...");
        return (

        <div className=" mb-2 flex productitemcss col-lg-4 col-md-4 col-sm-12">

<img src={this.props.product.src} className="img-fluid mx-auto" />

<div className="content">
       <div className="text-center"> Product id: {this.props.product.snackid} </div>
        <div className="text-center">Product Name : {this.props.product.name}</div>
       <div className="text-center"> Price : {this.props.product.price} </div>
        <div className="text-center">Quantity : {this.state.quantity}</div>


        <div className="text-left" ><NavLink to="/products/snacks/cart" className="bg-alert p-2 m-2" onClick={this.passData.bind(this)}>ADD TO CART</NavLink></div>
        <div className="text-right"><a href="#" className="text-right bg-alert p-2 m-2 pb-2" onClick={this.decQuantity.bind(this)}>Buy This Item</a></div>
           </div>
        </div>
       
    )
}
}