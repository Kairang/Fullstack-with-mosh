import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TableHeader extends Component {
    raiseSort = (path) => {
        const sortColumn = { ...this.props.sortColumn };

        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        this.props.onSort(sortColumn);
    };

    renderSortIcon = (column) => {
        const { path, order } = this.props.sortColumn;

        if (column.path !== path) return null;
        if (order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>
    };

    render() {
        const { columns } = this.props;

        return (
            <thead className="thead-dark">
                <tr>
                    {columns.map(column =>
                        <th
                            className='clickable'
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    )}
                </tr>
            </thead>
        );
    }
}

TableHeader.propTypes = {
    columns: PropTypes.array,
    sortColumn: PropTypes.object,
    onSort: PropTypes.func
}

TableHeader.defaultProps = {
    columns: [],
    onSort: null
}

export default TableHeader;