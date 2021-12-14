import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {

        const {face, rolling} = this.props; 

        // Using font-awesome-icon to show the exact number of dots 
        // <i class="fas fa-dice"></i> is font-awesome html code for using the icon 
        return <i className={ `Die fas fa-dice-${face}
         ${rolling && 'Die-shaking'}`}/>

    }
}

export default Die