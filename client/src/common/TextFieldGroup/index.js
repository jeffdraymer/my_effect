import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


//Will define the basic format for user input fields
const TextFieldGroup = ({
    name,
    value,
    error,
    info,
    type,
    onChange
}) => {
    return (
        <div className="form-group">
            {info && <small className='form-text text-muted'>{info}</small>}
            <input type={type} className={classnames('form-control form-control-lg', {
                'is-invalid': error
            })}
                name={name}
                value={value}
                onChange={onChange} />
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errror: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;