import React, { Component } from 'react';
import { Vega } from 'react-vega';

import { spec1, data1, spec2, spec3 } from './specData';

export default class VgChart extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="App-header" style={{backgroundColor: 'lightgray'}}>
                <Vega
                    spec={{
                        ...spec1,
                        data: { values: data1 },
                    }}
                    actions={{
                        export: true,
                        source: false,
                        compiled: false,
                        editor: false,
                    }}
                />
                <Vega
                    spec={{
                        ...spec2
                    }}
                    actions={{
                        export: true,
                        source: false,
                        compiled: false,
                        editor: false,
                    }}
                />
                <Vega
                    spec={{
                        ...spec3
                    }}
                    actions={{
                        export: true,
                        source: false,
                        compiled: false,
                        editor: false,
                    }}
                />
            </div>
        )
    }
}