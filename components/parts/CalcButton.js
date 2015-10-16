var React = require('react');

var CalcButton = React.createClass({
	
	render(){
		return (
			<div className="col-xs-3">
				<div onClick={this.props.click} className="calcButton">{this.props.label}</div>
			</div>
			)
	}
})

module.exports = CalcButton;