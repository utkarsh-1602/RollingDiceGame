import React, {Component} from 'react';
import Die from './Die';
import './RollingDice.css';

class RollingDice extends Component {
    
    //Face Numbers passed as default props
    
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']

        /* In React Constructor are used only for two Purposes: 
       > Initializing local state by assigning an object to this.state.
       > Binding event handler methods to an instance.
        */
    }
    constructor(props){
        super(props);
        /*
        Super(): It is used to call the constructor of its parent class.
        This is required when we need to access some variables of its parent class.

        Props: It is a special keyword that is used in react stands for properties.
        Used for passing data from one component to another.
        */

        //States 
        // State is a plain JavaScript object used by React to represent an information about the component's current situation
        this.state = {
            die1: 'one', 
            die2: 'one', 
            rolling: false
        }
        this.roll = this.roll.bind(this)
//  bind() method allows us to easily set which object will be bound by the this keyword when a function or method is invoked
    }
    roll(){
        const {sides} = this.props;
        this.setState({
            
            //changing the state upon click 
            die1: sides[Math.floor(Math.random() * sides.length)], 
            die2: sides[Math.floor(Math.random() * sides.length)], 
            rolling: true
        })

        // Start Timer of One Second when rolling start 
        setTimeout(() => {
            //when time is Over, set rolling to false 
            this.setState({rolling: false})
        }, 1000);
    }
    
    render() {
        const handleBtn = this.state.rolling ? 'RollDice-rolling': '' 

        const {die1, die2, rolling} = this.state; 

        return(
            <div className="RollingDice">
                <div className="RollingDice-container">
                    <Die face={die1} rolling={rolling} />
                    <Die face={die2} rolling={rolling} />
                </div>
                <button className={handleBtn}
                        disabled={this.state.rolling}
                        onClick={this.roll}>
                            {this.state.rolling ? 'Rolling': 'Roll Dice! '}
                </button>
            </div>
        )
    }
};

export default RollingDice; 