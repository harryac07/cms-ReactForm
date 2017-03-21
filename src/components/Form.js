var React = require('react');



var AddForm=React.createClass({

	add(e) {

		e.preventDefault();
		this.props.add({
			name : this.refs.name.value,
			email: this.refs.email.value,
			phone: this.refs.phone.value
		});
		this.refs.name.value='';
		this.refs.email.value='';
		this.refs.phone.value='';
	},

	componentWillMount() {

		this.buttonStyle={
			float:'right',
			margin:'0px 10px 0px 0px'
		}

		this.formStyle={
			paddingLeft:30
		}
	},

    render() {
        return (
        	<div id="form">
				<form  className="form-inline" style={this.formStyle} onSubmit={this.add} >
					<div className="form-group">
						<input id="name" type="text" className="form-control" placeholder="Enter name.."  ref="name" required />
					</div>
					<div className="form-group">
						<input id="email" type="email" className="form-control" placeholder="Enter email.."  ref="email" required />
					</div>
					<input id="phone" type="text" className="form-control" placeholder="Enter phone no.."  ref="phone" required />
					&nbsp;&nbsp;
					<button style={this.buttonStyle} className="btn btn-primary ">Add User</button>
				</form>
			</div>
        );
    }
});

export default AddForm;
