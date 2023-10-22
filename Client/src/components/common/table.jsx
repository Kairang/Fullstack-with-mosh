import React from 'react'
import TableHeader from './tableHeader';
import TableBody from './tableBody';

export default function Table(props) {
    const { data, columns, sortColumn, onSort } = props;
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />

            <TableBody
                columns={columns}
                data={data}
            />
        </table>
    )
}
