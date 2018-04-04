import React,{Component} from 'react';
import {Switch,Route, NavLink} from 'react-router-dom';
import  Snacks  from './snacks';
import { Drinks } from './drinks';
import  { Link } from 'react-router';
export class Products extends Component{

    render(){

        return(

            <div className="m-auto my-auto bg bg-dark">
             <div className="text-white"><h1>Browse your Products here....</h1></div>
             <ul>
                 <li className="text-warning"><NavLink to="/products/snacks" className="text-yellow">SNACKS SECTION</NavLink></li>
                 
                 <li><NavLink to="/products/drinks">DRINKS SECTION</NavLink></li>
             </ul>

             </div>
        )
    }
}