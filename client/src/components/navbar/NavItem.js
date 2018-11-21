import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

//Will define the basic format for user input fields
const NavItem = ({
    label,
    icon,
    link
}) => {
    return (
        <div className="nav-item">
            <Link className="nav-link" to={link}>
                <i className={icon} /> {label}
            </Link>
        </div>
    )
}

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default NavItem;