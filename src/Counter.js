import React, {Component} from 'react';

import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue
        }
    }

    updateCounterValue = (addOrSubstract) => {
        let updateValue = (addOrSubstract)?1:-1;
        this.setState(prevState=>{
            return ({counterValue: prevState.counterValue + updateValue});
        });
    }

    resetOrSetZero = (reset) => {
         if(reset) {
            this.setState({counterValue: this.props.initValue})
         } else {
            this.setState({counterValue: 0})
         } 
    }

    render() {
        return (
            <div>
                Licznik: {this.state.counterValue}
                <ButtonsPanel updateCounter={this.updateCounterValue} resetCounter={this.resetOrSetZero} />
            </div>
            
        );
    }
}

export default Counter;


