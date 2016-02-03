var React = require('react');
var Header = require('./header');
var Body = require('./body');
var Footer = require('./footer');


module.exports = React.createClass({

	render: function(){
		return <div>
			<div className="container margin">
				<div className="col-xs-12 text-center">
						<img src="/img/fgAvatar.svg" className="img-circle image-settings"/>
					</div>
					<div className="col-xs-12 text-center">
						<h1>Flor Guzman</h1>
						<label className="title">Full Stack - Web Developer </label>
					</div>
					<hr className="col-xs-12 rm-padding hr-content" />
					
					<div className ="socialmedia col-xs-12">

			     		<a target="_blank" onClick={this.handleOnClick} className="col-xs-3">
				     		<i className="fa fa-envelope-o fa-3"></i>
				     	</a>
				     	<a href="https://github.com/florgb02" target="_blank" className="col-xs-3">
				     		<i className="fa fa-github fa-3"></i>
				     	</a>
						<a href="https://www.linkedin.com/in/flor-guzman-9b07b126" target="_blank" className="col-xs-3">
				     		<i className="fa fa-linkedin fa-3"></i>
				     	</a>
				     	<a href="https://twitter.com/FlorGuzmanb" target="_blank" className="col-xs-3">
				     		<i className="fa fa-twitter fa-3"></i>
						</a>
					</div>
			</div>
			<div className="col-xs-12 rm-padding quotes">
			<q>Pleasure in the job puts perfection in the work.” - Aristotal</q>
			</div>
		</div>
	}

});