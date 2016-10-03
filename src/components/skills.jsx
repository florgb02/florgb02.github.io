var React = require('react');
var RightContent = require('./right_section');

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 rm-padding wrapper">
			<RightContent />
			<div className="col-xs-12 col-lg-8 right-container">
				{ this.getDescription() }
				{ this.getResumeInfo() }
				{ this.getTechSkillsGraph()}
				{ this.getChartImage() }
			</div>

		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<p>I am a highly motivated Web Developer with experience in creating high quality websites with 
				robust functionality in a LAMP environment using mockups and turning them into working HTML/CSS/JS, 
				developing responsive designs across all devices.
			</p>
		</div>
	},
	getResumeInfo: function(){
		return <div className="col-xs-12">
			<div className="skills">
				<h2>Skills </h2>
				<ul className="col-xs-12 rm-padding skills-list">
					<li>LAMP</li>
					<li>PHP</li>
					<li>LARAVEL5</li>
					<li>Eloquent</li>
					<li>MYSQL</li>
					<li>SQL</li>
					<li>XML</li>
					<li>Linux</li>
					<li>Apache</li>
					<li>Nginx</li>
					<li>BASH</li>
					<li>WordPress</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>AJAX</li>
					<li>REACTJS</li>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>SASS</li>
					<li>Foundation</li>
					<li>Bootstrap</li>
					<li>Browserify</li>
					<li>Media Queries</li>
					<li>Vagrant</li>
					<li>Homestead</li>
					<li>MAMP</li>
					<li>GIT</li>
					<li>GRUNT</li>
					<li>GULP</li>
					<li>Composer</li>
					<li>PhoneGap</li>
				</ul>
			</div>
		</div>
	},
	getTechSkillsGraph: function(){
		return <div className="col-xs-12 chart">
			<img  src="../../img/meta-chart-skills-2.svg" alt="Knowledge-%"/>
		</div>
	},
	getChartImage: function(){
		return <div className="col-xs-12 chart">
			<h2>FrontEnd vs BackEnd</h2>
			<img src="../../img/meta-chart.svg" alt="Knowledge-%"/>
		</div>
	}
});