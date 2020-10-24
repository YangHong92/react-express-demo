import React, { Component } from 'react';
import InputRange from '../../components/inputRange';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            salary: {min: 0, max: 300000}
        }

    }

    render() {
        return (
            <div>
                <InputRange 
                    maxValue={300000}
                    minValue={0}
                    step={500}                  
                    onChangeComplete={value => alert(`${value.min}, ${value.max}`)}                  
                />
            </div>
        )
    }
}