var React = require('react');
var RightContent = require('./right_section');
var Contact = require('./contact');

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 rm-padding wrapper">
			<RightContent />
			<div className="col-xs-12 col-lg-8 right-container">
				{ this.getDescription() }
				{ this.getResumeInfo() }
			</div>
		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<h3>I am a Full Stack Web Developer from NYC, United States.</h3>
			<p>
			I enjoy writing beautiful and clean code from the Back-End to Front-End because beautiful code is really meant 
			to help the programmer  be happy and productive. </p>
			<p>I Believe in Work - Life balance. When I'm not coding, you'll find me combining millennia-old techniques with a modern sense of competitive drive
			 at a kickboxing court. </p>
			<p>I am also a coffee lover who enjoys a delightful glass of Wine with a good book.</p>
			<Contact />
			</div>
	},
	getResumeInfo: function(){
		return <div className="col-xs-12">
			
		</div>
	}
});
