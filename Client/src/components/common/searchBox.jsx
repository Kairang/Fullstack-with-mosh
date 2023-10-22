import React from 'react';

function SearchBox({ onChange }) {
    const handleQueryChange = (e) => onChange(e?.target?.value);

    return (
        <input
            type="text"
            name="query"
            className="form-control mb-4"
            placeholder="Search..."
            onChange={handleQueryChange}
        />
    );
}

export default SearchBox;
