var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Whoops404 = React.createClass({
	render () {
		return(
			<div id="not-found">
				<h1> 404 Error: Page not Found!</h1>
				<p>Were you looking for one of these: </p>

				<Link to="/"> Join as Audience</Link>
				<Link to="/speaker"> Start the presentation</Link>
				<Link to="/board"> View the board</Link>
			</div>
			)
	}
})

module.exports = Whoops404;