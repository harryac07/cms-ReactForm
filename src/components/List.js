var React = require('react');

var List = React.createClass({

	getInitialState() {
		return{
			editing:false
		}

	},

	componentDidMount() {

		var spans =  document.querySelector('td');
 		spans.addEventListener('click', this.handleClick,false);
		

	},

	componentWillUnmount() {
		var spans =  document.querySelector('td');
 		spans.removeEventListener('click', this.handleClick,false);
	},

	handleClick(e){
        if(e.target.tagName==='I'){
        	this.setState({editing:true})
        }

	},

	edit(){
			
		this.setState({editing:true})

	},

	save(e) {

		e.preventDefault();
		var updated={
			id:this.props.user.id,
			name:this.refs.name.value,
			email:this.refs.email.value,
			phone:this.refs.phone.value
		};
		this.props.userUpdate(updated,this.props.user.id);
		this.setState({editing:false});
	},

	cancel(e){

		e.preventDefault();
		this.setState({editing:false})
	},

	renderForm() {
		return(
			<div>
				<form className="form-inline form-edit">
					<div className="form-group">
						<input type="text" className="form-control" defaultValue={this.props.user.name} ref="name" required autoComplete="off" />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" defaultValue={this.props.user.email} ref="email" required autoComplete="off" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" defaultValue={this.props.user.phone} ref="phone"  required autoComplete="off" />
					</div>
					&nbsp;&nbsp;
					<button className="btn btn-primary " onClick={this.save}>Save</button>
					&nbsp;
					<button className="btn btn-danger " onClick={this.cancel}>Cancel</button>
				</form>
				
			</div>
		);
	},


    renderDisplay() {
        return (
			<tbody onClick={ this.handleClick }>	

				{this.props.children}

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
