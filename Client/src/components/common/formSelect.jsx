import React from 'react';

function FormSelect(props) {
    const { name, label, error, options, ...rest } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control">
                <option value="" />
                {options.map((option) => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );
}

export default FormSelect;
