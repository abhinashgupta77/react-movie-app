import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss';

const Dropdown = ({ className, children, ...props }) => (
    <div className={`Dropdown ${className}`} {...props}>
        {children}
    </div>
);

Dropdown.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;
