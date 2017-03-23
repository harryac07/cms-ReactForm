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

    render() {
        return (
        	<div id="form">
				<form  className="form-inline add-form" onSubmit={this.add} >
					<div className="form-group">
						<input id="name" type="text" className="form-control" placeholder="Enter name.."  ref="name" required autoComplete="off" />
					</div>
					<div className="form-group">
						<input id="email" type="email" className="form-control" placeholder="Enter email.."  ref="email" required autoComplete="off" />
					</div>
					<input id="phone" type="text" className="form-control" placeholder="Enter phone no.."  ref="phone" required autoComplete="off" />
					&nbsp;&nbsp;
					<button id="add-form-button" style={this.buttonStyle} className="btn ">Add New</button>
				</form>
			</div>
        );
    }
});

export default AddForm;
