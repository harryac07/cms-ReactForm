import React, { Component } from 'react';
import Home from './Home'
import Navigation from './Navigation'
import AddForm from './Form'
import List from './List'

const users=[
	{
		id:0,
		name:'Hari',
		email : 'h@yahoo.com',
		phone : '0449889800'
	},
	{
		id:1,
		name:'Sari',
		email : 's@yahoo.com',
		phone : '0449889800'
	},
	{
		id:2,
		name:'Pari',
		email : 'p@yahoo.com',
		phone : '0449889800'
	},
	{
		id:3,
		name:'Bmal',
		email : 'b@yahoo.com',
		phone : '0449889800'
	},
	{
		id:4,
		name:'Shura',
		email : 'sh@yahoo.com',
		phone : '0449889800'
	},
	{
		id:5,
		name:'Vura',
		email : 'v@yahoo.com',
		phone : '0449889800'
	}
];


class App extends Component {

	constructor(props){
		super(props);
		this.state={
			user: [],
			editing:false
		};
		this.add=this.add.bind(this);
		this.remove = this.remove.bind(this);	
		this.edit = this.edit.bind(this);
		this.userUpdate = this.userUpdate.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.sortByName = this.sortByName.bind(this);
	}

	componentWillMount() {
		this.setState({
		    user: [...users]
		});

	}

	add(value){
		var name=value.name;
		var email=value.email;
		var phone = value.phone;

		var userToAdd = {};
		var errors=[];

    	if(name.length>0){
    		userToAdd.name = name;
    	}else{
    		errors.push('name cannot be empty');
    	}

    	if( this.validateEmail(email)){
    		userToAdd.email = email;
    	}else{
    		errors.push('email is not valid');
    	}

    	if(!isNaN(phone) && phone.length>0){
    		userToAdd.phone = phone;
    	}else{
    		errors.push('only numbers are allowed');
    	}

		if(errors.length===0){ // check if error exists
			this.setState({
			    user: this.state.user.concat([userToAdd])
			});
		}else{
			alert(errors);
		}


	}

	remove(userToRemove){
		var stateUsers=this.state.user;
		var index = stateUsers.indexOf(userToRemove);
		stateUsers.splice(index, 1);
		this.setState({user: stateUsers });
	}

	edit(){
		this.setState({editing:true});
	}

	userUpdate (newdata,id){

		var newName=newdata.name;
		var newEmail=newdata.email;
		var newPhone = newdata.phone;
		
		var userState=this.state.user;
		var errors=[];

		for (var i=0; i<userState.length; i++) {
		    if (userState[i].id === id) {
			    
		    	userState[i].id = id;

		    	if(newName.length>0){
		    		userState[i].name = newName;
		    	}else{
		    		errors.push('name cannot be empty');
		    	}

		    	if( this.validateEmail(newEmail)){
		    		userState[i].email = newEmail;
		    	}else{
		    		errors.push('email is not valid');
		    	}
		    	if(newPhone.length>0){
			    	if(!isNaN(newPhone)){
			    		userState[i].phone = newPhone;
			    	}else{
			    		errors.push('only numbers are allowed');
			    	}
			    }else{
			    	errors.push('Phone number is mandatory')
			    }
			    
		    }
		}
		if(errors.length===0){
			this.setState({user: userState});
		}else{
			alert(errors);
		}

	}

	validateEmail(email){
		var re = /\S+@\S+\.\S+/;
    	return re.test(email);
	}

	sortByName() {
		var users=this.state.user;
		users.sort( function( a, b ) {
		    a = a.name.toLowerCase();
		    b = b.name.toLowerCase();

		    return a < b ? -1 : a > b ? 1 : 0;
		});
		this.setState({user:users});
	}

    render() {
        return (
            <div>
            	<Navigation />
            	<div className="container">
		        	<Home />
		        	<AddForm add={this.add}/>
		        	
					<div className="table-responsive">
						<table className="table">
							<thead>
						      	<tr>
							        <th onClick={this.sortByName}>Name &nbsp; <span className="glyphicon glyphicon-arrow-down"></span></th>
							        <th>Email</th>
							        <th>Phone number</th>
						      	</tr>
							</thead>
								{this.state.user.map((list,i)=>{
									return <List key={i} user={list} users={this.state.user} userUpdate={this.userUpdate} remove={this.remove} edit={this.state.editing}>{
										
										<tr>
									        <td>{list.name}</td>
									        <td>{list.email}</td>
									        <td>{list.phone}</td>
								      	</tr>
								      	
									}</List>
								})}
						</table> 
			  		</div>
		        	
            	</div>
            </div>
        );
    }
}

export default App;
