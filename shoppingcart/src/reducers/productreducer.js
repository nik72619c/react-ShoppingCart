var initialstate={

    snacksarr: [],
    drinksarr: []

}

export const Productreducer=(state=initialstate,action)=>{

   
    var newState={
        snacksarr:[],
        drinksarr:[]
    }
// console.log("action",action.payload.snacksarr);
    if(action.type=='snacks'){
        console.log("inside action.type 1");
        newState.snacksarr=action.payload.snacksarr;
        console.log("state now", newState);  
    
    }

    else if(action.type=='drinks'){

newState.drinksarr=action.payload.drinksarr;
   
}
console.log("newstate",newState);
    return newState;
}