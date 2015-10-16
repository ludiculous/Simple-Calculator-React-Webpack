var React = require('react');
var APP = require('./components/APP');
var Calc = require('./components/ManageCalc');
var Whoops404 = require('./components/Whoops404');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;



var routes = (
		<Route handler={APP}>
			<DefaultRoute handler={Calc} />
			
			<NotFoundRoute name="Whoops404" path="Whoops404" handler={Whoops404} />
		</Route>
	);

Router.run(routes, function(Handler){
	React.render(<Handler />, document.getElementById('react-container'))
})
