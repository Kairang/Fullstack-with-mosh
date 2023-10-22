import React from 'react';

function FormInput(props) {
    const { name, label, error, ...rest } = props;

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} id={name} name={name} className="form-control" autoComplete="off" />
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );
}

export default FormInput;
