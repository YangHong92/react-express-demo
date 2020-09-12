import React, { Component } from 'react';
import _ from 'lodash';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: props.data,
            columns: props.columns,
            filterInput: ""
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                columns: [...nextProps.columns],
                filteredData: [...nextProps.data]
            });
        }
    }

    handleGlobalFilterChange = e => {
        const value = e.target.value || "";
        this.setState({ filterInput: value }, () => {
            this.globalSearch();
        });
    };

    globalSearch = () => {
        const { filterInput } = this.state;
        const { data, columns } = this.props;
        
        const filteredData = _.filter(data, item => {
            let condition = false;

            _.forEach(columns, (_item, _index) => {
                condition = condition || item[_item.accessor].toString().toLowerCase().includes(filterInput.toLowerCase()) 
            })
            return condition;
        });
        this.setState({ filteredData });
    };

    render() {
        let { filteredData, columns, filterInput } = this.state;

        return (
            <div>
                <input
                    value={filterInput}
                    onChange={this.handleGlobalFilterChange}
                    placeholder={"Global search"}
                />
                <ReactTable
                    data={filteredData}
                    columns={columns}
                    defaultPageSize={10}
                />
            </div>
        )
    }

}