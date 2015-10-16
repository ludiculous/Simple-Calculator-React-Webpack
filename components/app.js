var React = require('react');
var Header = require('./parts/header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var APP = React.createClass({
	getInitialState(){
		return {
			title:'Calc It',
			display:''
		}
	},
	componentWillMount(){
		
	},

	render() {
		return (
				<div>
						<Header {...this.state} />
						<RouteHandler emit={this.emit} {...this.state}/>

				</div>
				);
	}
});

module.exports = APP;