var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}
	},
	render: function(){
		return <div className="input-group">
			<input value ={this.state.text} onChange={this.handleInputChange} type="text" className="form-control" />
			<span className="input-group-btn">
			<button onClick={this.handlerClick} className="btn btn-default" type="button">
				Add
			</button>
			</span>
			</div>
	},
	handlerClick: function(){
		this.props.itemStore.push({
			text:this.state.text,
			done:false
		})

		this.setState({text: ''});

	},
	handleInputChange: function(event){
		this.setState({text: event.target.value});
	}
});