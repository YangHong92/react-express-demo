import React, { Component } from 'react';
import VgChart from '../../components/VgChart';
import EChart from '../../components/EChart';

export default class Chart extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <VgChart />
                <EChart />
            </div>
        )
    }
}