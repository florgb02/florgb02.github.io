var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({

	render: function(){
		return <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
        <i className="fa fa-angle-left"></i>FG _ <i className="fa fa-coffee"></i> /<i className="fa fa-angle-right"></i>
      </a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="about">About Me</Link></li>
        <li><Link to="skills">Skills</Link></li>
        <li><Link to="portfolio">Portfolio</Link></li>
      </ul>
    </div>
  </div>
</nav>
	}
});