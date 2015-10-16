var React = require('react');

var Display = React.createClass({
	render(){
		return (
			<div className="row" >
				<input id="screen" value={this.props.displayData}/>


			</div>
			);
	}
})

module.exports = Display;