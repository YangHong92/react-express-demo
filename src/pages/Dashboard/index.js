import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import InputRange from '../../components/inputRange';
import { generatePDF } from '../../utils/utils';

import '../../styles/dashboard.scss';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            salary: {min: 0, max: 300000}
        }

    }

    render() {
        return (
            <div className="dashboard-container">
                 <Button onClick={()=>generatePDF(
                     ['field1', 'field2'], 
                     {'field1': 'Field 1','field2': 'Field 2'},
                     {'field1': 'contents','field2': 'demo'},
                     `${'Field 1'} ${'Field 2'}.pdf`
                     )}>Download PDF</Button> 
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