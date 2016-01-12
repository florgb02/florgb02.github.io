var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://amber-fire-8473.firebaseio.com/';

module.exports = React.createClass({
	componentWillMount: function(){
		this.fb = new Firebase( rootUrl + 'items/' + this.props.item.key );
	},

	getInitialState: function(){
		return {
			text:this.props.item.text,
			done:this.props.item.done,
			textchange: false
		}
	},
	render: function(){
		return <li className="input-group">
					<span className="input-group-addon">
						<input type="checkbox" checked={this.state.done} onChange={this.handleDoneChange}/>
					</span>
					<input type="text" className="form-control" value={this.state.text} onChange={this.handleTextChange} disabled={ (this.props.item.done ? 'disable' : '')}/>
					<span className="input-group-btn">
						{this.changesButtons()}
						<button className="btn btn-default" onClick={this.handleDeleteClick}>Delete</button>
					</span>
				</li>
	},
	changesButtons: function(){
		if(!this.state.textchange){
			return null;
		}else{
			return <span>
				<button onClick={this.handleSaveClick} className="btn btn-warning">Save</button>
				<button onClick={this.handleUndoClick} className="btn btn-danger">Undo</button>
			</span>
		}
	},
	handleDoneChange: function(event){
		var checked = { done: event.target.checked };
		this.setState(checked);
		this.fb.update(checked);
	},
	handleDeleteClick: function(event){
		this.fb.remove();
	},
	handleTextChange: function(event){
		this.setState({
			text: event.target.value,
			textchange: true
		});
	},
	handleUndoClick: function(){
		this.setState({
			text:this.props.item.text,
			textchange:false
		});
	},
	handleSaveClick: function(){
		this.fb.update({text: this.state.text});
		this.setState({ textchange:false });

	}

});