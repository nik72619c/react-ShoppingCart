import React from 'react';
import { connect } from 'react-redux';
import {Productitem} from './productItem';
import { store } from '../store/store';
import Cart from './cart';
import {Productreducer} from '../reducers/productreducer';
import {NavLink} from 'react-router-dom'; 


 const Snacks=(props)=>{
console.log("props",props);
    return (<div  className="row snacksdiv">

{
    props.snacksarr.map(snack=>{
        return <Productitem product={snack} />
    })

    
}
 {/* <NavLink to="/products/snacks/cart" className="p-2 mx-auto bg-primary text-white">SHOW MY CART</NavLink> */}
<div className="w-100 h-100 bg bg-primary setImage"></div>
</div>)
}
// store.subscribe(()=>{

//     console.log("store updated...",store.getState());
// });
const mapStateToProps=state=>{
console.log("the mapto props", state);
    console.log(" mapstatestate",state);
    return{
    snacksarr: state.Productreducer.snacksarr
    }
}


export default connect(mapStateToProps)(Snacks);