import React from 'react';
import PropTypes from 'prop-types';


//Will define the basic format for user input fields
const Togglebox = ({
    name,
    checked,
    info,
    onChange
}) => {
    return (
        <div className="row">
            <label className="switch">
                <input name={name} type="checkbox" checked={checked} onChange={onChange} />
                <span className="slider round"></span>
            </label>
            {info && <small className='form-text text-muted toggle-text'>{info}</small>}
        </div>
    )
}

Togglebox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    info: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Togglebox;