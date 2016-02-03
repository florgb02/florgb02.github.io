var React = require('react');

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 contact">
	     	<hr />
	     	<div className ="socialmedia">
	     		<a target="_blank" onClick={this.handleOnClick}  className="col-xs-3">
		     		<i className="fa fa-envelope-o fa-3"></i>
		     	</a>
		     	<a href="https://github.com/florgb02" target="_blank"  className="col-xs-3">
		     		<i className="fa fa-github fa-3"></i>
		     	</a>
				<a href="https://www.linkedin.com/in/flor-guzman-9b07b126" target="_blank" className="col-xs-3">
		     		<i className="fa fa-linkedin fa-3"></i>
		     	</a>
		     	<a href="https://twitter.com/FlorGuzmanb" target="_blank"  className="col-xs-3">
		     		<i className="fa fa-twitter fa-3"></i>
				</a>
			</div>
	     	
	    </div>
	},
	handleOnClick: function(){
		window.location.href = "mailto:flor.guzmanb@gmail.com";

	}
});