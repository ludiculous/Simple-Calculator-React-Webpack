var React = require('react');

var Header = React.createClass({

	propTypes:{
		title: React.PropTypes.string.isRequired
	},


	render(){
		return (
			<header className="row">
				<div className="col-xs-10">
				</div>
				<div className="col-xs-2">
					<span id="calculation-status"></span>
				</div>
			</header>
			)
	}
})

module.exports = Header;