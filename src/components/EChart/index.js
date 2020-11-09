import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

import { spec1, spec2 } from './specData';

export default class EChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReactEcharts
                    option={spec1}
                />
                <ReactEcharts
                    option={spec2}
                />
            </div>
        )
    }
}