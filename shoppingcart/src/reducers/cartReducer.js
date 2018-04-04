var cartstate={

    cart: {}
}

export const Cartreducer=(state=cartstate,action)=>{

    var state={

        cart: {}
    }
    console.log("payload of cartreducer is",action);
    console.log("indise reducer2");
    if(action.type=="takeit"){

        console.log("inside if...");
        console.log("action.payload.cartitem", action.payload.cartitem);
        state.cart=action.payload.cartitem;
    }

    console.log("state2",state);
    return state;

}