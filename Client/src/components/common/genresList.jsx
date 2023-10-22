import React from 'react';
import PropTypes from 'prop-types';

GenresList.propTypes = {
    items: PropTypes.array.isRequired,
    onItemSelect: PropTypes.func.isRequired
}

GenresList.defaultProps = {
    keyProperty: '_id',
    textProperty: 'name',
}

export default function GenresList(props) {
    const { items, onItemSelect, keyProperty, selectedItem, textProperty } = props;

    return (
        <ul className="list-group">
            {items.map(item =>
                <li
                    key={item[keyProperty]}
                    onClick={() => onItemSelect(item)}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>
            )}
        </ul>
    )
}
