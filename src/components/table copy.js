import React, { useState } from 'react';
import { useTable, useGlobalFilter } from "react-table";

export default function Table({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow,// Prepare the row (this function needs to be called for each row before getting the row props)
        setGlobalFilter
    } = useTable(
        {
            columns,
            data
        },
        useGlobalFilter // Adding the useFilters Hook to the table
    );

    // Create a state
    const [filterInput, setFilterInput] = useState("");

    // Update the state when input changes
    const handleGlobalFilterChange = e => {
        const value = e.target.value || "";
        setGlobalFilter(value);
        setFilterInput(value);
    };
    console.log("headerGroups:", headerGroups)
    console.log("rows:", rows)
    return (
        <div>
            <input
                value={filterInput}
                onChange={handleGlobalFilterChange}
                placeholder={"Global search"}
            />
            <table {...getTableProps()}>
                <thead>
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                            {// Render the header
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}