import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {Switch,Route, Router} from 'react-router-dom';
import { Products } from './components/products';
import {BrowserRouter} from 'react-router-dom/BrowserRouter';
import Snacks  from './components/snacks';
import { Drinks } from './components/drinks';
import {store} from './store/store';
import Cart from './components/cart';

class App extends Component {

  constructor(){

    super();
        var snacks=[];
    var drinks=[];
    var veggies=[];
  }
  
  componentWillMount() {

    fetch("https://raw.githubusercontent.com/nik72619c/myJsons/master/drinks.json").then(response=>response.json()).then(result=>{

    this.drinks=result.drinks;
    console.log("this.drinks",this.drinks);    
  
  });

  fetch("https://raw.githubusercontent.com/nik72619c/myJsons/master/snacks.json").then(response=>response.json()).then(result=>{

    this.snacks=result.snacks;
    console.log("this.snacks",this.snacks);   
    store.dispatch({type: 'snacks',payload: {snacksarr : this.snacks}})  
  
  })

  fetch("https://raw.githubusercontent.com/nik72619c/myJsons/master/veggies.json").then(response=>response.json()).then(result=>{

    this.veggies=result.veggies;
    console.log("this.veggies",this.veggies);    
  
  })

  
 

  }


  render() 
  
  {

    
    return (
     <Switch>
       <Route path="/" exact render={()=> <div>
       <Login/></div>}/>
        <Route path="/products" exact component={Products} >
     
        </Route>
        <Route path="/products/snacks" exact component={Snacks}/>
        <Route path="/products/drinks" exact component={Drinks}/> 
        <Route path="/products/snacks/cart" exact component={Cart} />
               </Switch>


       
    );
  }
}

export default App;
