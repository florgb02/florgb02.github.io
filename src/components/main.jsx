var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var HomePage = require('./homepage');

module.exports = React.createClass({

	render: function(){
		return <div>
			<Header />
			<div className="">
			{this.content()}
			</div>
			<Footer />

		</div>
	},
	content: function(){
		if(this.props.children){
			return this.props.children
		}else{
			return <HomePage />
		}
	}
});