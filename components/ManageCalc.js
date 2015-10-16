var React = require('react');
var Display = require('./parts/Display');
var CalcButton = require('./parts/CalcButton');
var _ = require('lodash');
//calc vars
var getCalc =[];
var sum =0;
var firstEqual = true;
var pressed = 0;


var ManageCalc = React.createClass({
	getInitialState (){
		return{
			displayData:""
		}
	},

	PressedAC(){
		getCalc.length = 0
		sum = 0;
		pressed =0;
		this.setState({displayData:""})
		firstEqual = true;
	},
	PressedPosNeg(){
		if(this.state.displayData == ""){return null}
		this.setState({displayData: this.state.displayData * -1})
	},	
	PressedMod(){
		getCalc.push(this.state.displayData)
		sum = getCalc[getCalc.length-1] * .01
		this.setState({displayData: sum})
		
	},
	PressedDivide(){
		getCalc.push(this.state.displayData)
		if(pressed>0){
			getCalc.push("/S")
		}
		else getCalc.push("/")
		
		this.setState({displayData:""})
		pressed++
	},
	PressedX(){
		getCalc.push(this.state.displayData)
		if(pressed>0){
			getCalc.push("xS")
		}
		else getCalc.push("x")
		this.setState({displayData:""})
			console.log(getCalc);
		pressed++
	},
	PressedAdd(){
		getCalc.push(this.state.displayData)
		
		if(pressed>0){
			getCalc.push("+S")
		}
		else getCalc.push("+")
		this.setState({displayData:""})
	
		pressed++
	},
	PressedSubtract(){
		getCalc.push(this.state.displayData)
		if(pressed>0){
			getCalc.push("-S")
		}
		else getCalc.push("-")
		this.setState({displayData:""})

		pressed++
	},
	Pressed7(){
		this.setState({displayData: this.state.displayData.concat([7])})
	},
	Pressed8(){
		this.setState({displayData: this.state.displayData.concat([8])})
	},
	Pressed9(){
		this.setState({displayData: this.state.displayData.concat([9])})
	},
	
	Pressed4(){
		this.setState({displayData: this.state.displayData.concat([4])})
	},
	Pressed5(){
		this.setState({displayData: this.state.displayData.concat([5])})
	},
	Pressed6(){
		this.setState({displayData: this.state.displayData.concat([6])})
	},
	
	Pressed1(){
		this.setState({displayData: this.state.displayData.concat([1])})
	},
	Pressed2(){
		this.setState({displayData: this.state.displayData.concat([2])})
	},
	Pressed3(){
		this.setState({displayData: this.state.displayData.concat([3])})
	},
	Pressed0(){
		this.setState({displayData: this.state.displayData.concat([0])})
	},
	PressedDot(){
		if(getCalc.indexOf(".") > -1){
			return null
		}
		
		else this.setState({displayData: this.state.displayData.concat(["."])})
	},

	PressedEqual(){
		
		getCalc.push(this.state.displayData)
	
			for(var i = 0; i<getCalc.length; i++){
			
				if(getCalc[i] === "+"){

					sum += parseFloat(getCalc[i-1]) + parseFloat(getCalc[i+1])
						
				}
				else if(getCalc[i] === "+S"){
					sum += parseFloat(getCalc[i+1]);
				}
				else if(getCalc[i] === "-"){
					sum += parseFloat(getCalc[i-1]) - parseFloat(getCalc[i+1])
				}
				else if(getCalc[i] === "-S"){
					sum = sum - parseFloat(getCalc[i+1])
				}

				else if(getCalc[i] === "x"){
					sum += parseFloat(getCalc[i-1]) * parseFloat(getCalc[i+1])
				}
				else if(getCalc[i] === "xS"){
					sum = sum * parseFloat(getCalc[i+1])
				}

				else if(getCalc[i] === "/"){
					sum += parseFloat(getCalc[i-1]) / parseFloat(getCalc[i+1])
				}
				else if(getCalc[i] === "/S"){
					sum = sum / parseFloat(getCalc[i+1])
				}


			}


	
		
		getCalc.length = 0;
		getCalc.push(sum);
		console.log(getCalc + "after equaled")
		this.setState({displayData: sum});
		
	},



	render (){
		return(
				<div id="calculator">
					<Display displayData = {this.state.displayData} />
					
						<div className="container ButtonField">
							<div className="row">
					
						<CalcButton click={this.PressedAC} label="AC"/>
						<CalcButton click={this.PressedPosNeg} label="+/-"/>
						<CalcButton click={this.PressedMod} label="%"/>
						<CalcButton click={this.PressedDivide} label="/"/>
					
							</div>

							<div className="row">
					
						<CalcButton click={this.Pressed7} label="7"/>
						<CalcButton click={this.Pressed8} label="8"/>
						<CalcButton click={this.Pressed9} label="9"/>
						<CalcButton click={this.PressedX} label="x"/>
					
							</div>
							
							<div className="row">
				
						<CalcButton click={this.Pressed4} label="4"/>
						<CalcButton click={this.Pressed5} label="5"/>
						<CalcButton click={this.Pressed6} label="6"/>
						<CalcButton click={this.PressedSubtract} label="—"/>
					
				
								</div>
				
							<div className="row">
			
						<CalcButton click={this.Pressed1} label="1"/>
						<CalcButton click={this.Pressed2} label="2"/>
						<CalcButton click={this.Pressed3} label="3"/>
						<CalcButton click={this.PressedAdd} label="+"/>
					
							</div>

							<div className="row">
			
						<CalcButton click={this.Pressed0} label="0"/>
						<CalcButton click={this.PressedDot} label="."/>
						<CalcButton click={this.PressedEqual} label="="/>
						
					
							</div>
						</div>

					
				</div>	
			)
	}
})

module.exports = ManageCalc;