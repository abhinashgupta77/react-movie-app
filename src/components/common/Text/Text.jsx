import React from 'react';
import PropTypes from 'prop-types';

import './Text.scss';

const Text = ({ text, type, className }) => (
    <span className={`Text Text--${type} ${className}`}>
        {text}
    </span>
);

Text.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['description', 'listoption']),
    className: PropTypes.string,
};

Text.defaultProps = {
    type: 'description',
    className: '',
};

export default Text;
