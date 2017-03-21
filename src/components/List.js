var React = require('react');
var ReactDOM=require('react-dom');
// import InlineEdit from 'react-edit-inline';

var List = React.createClass({

	getInitialState() {
		return{
			editing:false
		}

	},
	componentWillMount() {
		this.style={
			   padding:'10px',
			   backgroundColor:'#ccc',
			   borderRadius:'48%'
		};
	},
	remove() {
		var confirmDelete =confirm("Delete username "+this.props.user.name+' ?');
		if(confirmDelete == true){
			this.props.remove(this.props.user);
		}
		
	},

	edit(){
			
		this.setState({editing:true})

	},

	save() {
		var updated={
			id:this.props.user.id,
			name:this.refs.name.value,
			email:this.refs.email.value,
			phone:this.refs.phone.value
		};
		this.props.userUpdate(updated,this.props.user.id);
		this.setState({editing:false});
	},
	cancel(){
		this.setState({editing:false})
	},

	renderForm() {
		return(
			<div>
				<form className="form-inline" style={this.formStyle} >
					<div className="form-group">
						<input type="text" className="form-control" defaultValue={this.props.user.name} ref="name" required />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" defaultValue={this.props.user.email} ref="email" required />
					</div>
					<input type="text" className="form-control" defaultValue={this.props.user.phone} ref="phone"  required />
					&nbsp;&nbsp;
					<button style={this.buttonStyle} className="btn btn-primary " onClick={this.save}>Save</button>
					&nbsp;
					<button style={this.buttonStyle} className="btn btn-danger " onClick={this.cancel}>Cancel</button>
				</form>
			</div>
		);
	},


    renderDisplay() {
        return (
			<tbody>	
				{this.props.children}
				<span >
		       		<span style={this.style} className="glyphicon glyphicon-pencil" onClick={this.edit}>Edit</span>
		        	&nbsp; &nbsp;
		       		<span style={this.style} className="glyphicon glyphicon-trash" onClick={this.remove}>Delete</span>
		       	</span>
		    </tbody>
        );
    }, //renderDisplay ends here

    render() {
		if(this.state.editing){
			return this.renderForm();
		}else{

			return this.renderDisplay();
		}
    }


});

module.exports=List;
