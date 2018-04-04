import React,{Component} from 'react';
import NavLink from 'react-router-dom/NavLink';

export class Login extends Component{

    constructor(props){

       var users=[];
        super(props);
        var isAuth=false;
        
    }



componentWillMount() {
    fetch('https://raw.githubusercontent.com/nik72619c/myJsons/master/login.json').then((response)=>{

    console.log("response is",response.json().then(result=>{console.log("result is",result.login)

    this.users=result.login;
    console.log("this.users",this.users);

}));


    });
}

authenticateUser(){

   for(let i=0;i<this.users.length;i++){

   if(this.users[i].userid==this.refs.username.value && this.users[i].password==this.refs.password.value){

    this.isAuth=true;
    alert("welcome " + this.users[i].userid + "!");
   }

 
   } 
   if(!this.isAuth){

    alert("invalid entry");
   }

   

}


    render(){

        return (<div className="bg bg-light">

        <h1 className="text-center text-success bold">WELCOME TO THE SHOPPING APP !</h1>

        <h2 className="text-center text-warning bold">PLEASE LOGIN TO CONTINUE</h2>
 <form>
<div className="form-group w-50"><input type="text" className="form-control"  ref="username" placeholder="type username here..."/></div>
<div className="form-group w-50"><input type="password" className="form-control" ref="password" placeholder="type password here..."/></div>

<NavLink to="/products" onClick={this.authenticateUser.bind(this)} className="text-white p-1 mx-auto bg-primary btn btn-primary">login</NavLink>

</form>


        </div>)
    }
}