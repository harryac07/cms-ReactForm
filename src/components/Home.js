import React, { Component } from 'react';

class Home extends Component {
	componentWillMount() {
		this.style={
			padding:'30px 0px 20px 30px'
		}
	}

    render() {
        return (
            <div style={this.style} className="home">
            	<h3>List of Participants</h3>
            </div>
        );
    }
}

export default Home;
