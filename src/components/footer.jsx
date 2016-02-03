var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 rm-padding footer">
			<div className="col-xs-12 rm-padding links">
				<ul>
					<li><Link to="about" >About</Link></li>
					<li><Link to="portfolio">Portfolio</Link></li>
					<li><Link to="skills">Skills</Link></li>
					<li className="cp"><p>@2016 Flor Guzman</p></li>
				</ul>

			</div>
	    </div>
	}
});