var React = require('react');
var CalcButton = require('./CalcButton');

var ButtonField = React.createClass({
	handlePressed(keyPressed){
		alert(keyPressed.props.label);
	},


	render(){
		return (
			<div className="container ButtonField">
				<div className="row">
					
						<CalcButton click={this.handlePressed} label="AC"/>
						<CalcButton click={this.handlePressed} label="+/-"/>
						<CalcButton click={this.handlePressed} label="%"/>
						<CalcButton click={this.handlePressed} label="/"/>
					
				</div>

				<div className="row">
					
						<CalcButton click={this.handlePressed} label="7"/>
						<CalcButton click={this.handlePressed} label="8"/>
						<CalcButton click={this.handlePressed} label="9"/>
						<CalcButton click={this.handlePressed} label="X"/>
					
				</div>
				<div className="row">
				
						<CalcButton click={this.handlePressed} label="4"/>
						<CalcButton click={this.handlePressed} label="5"/>
						<CalcButton click={this.handlePressed} label="6"/>
						<CalcButton click={this.handlePressed} label="-"/>
					
				
				</div>
				<div className="row">
			
						<CalcButton click={this.handlePressed} label="1"/>
						<CalcButton click={this.handlePressed} label="2"/>
						<CalcButton click={this.handlePressed} label="3"/>
						<CalcButton click={this.handlePressed} label="+"/>
					
				</div>

				<div className="row">
			
						<CalcButton click={this.handlePressed} label="0"/>
						<CalcButton click={this.handlePressed} label="."/>
						<CalcButton click={this.handlePressed} label="="/>
						
					
				</div>
			</div>
			)
	}
})

module.exports = ButtonField;