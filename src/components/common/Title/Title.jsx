import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ type, text, textTranform }) => (
    <span
        className={`Title Title--${type}${textTranform ? ' Title--transform' : ''}`}
    >
        {text}
    </span>
);

Title.propTypes = {
    type: PropTypes.oneOf(['page', 'subtitle', 'section', 'card', 'label', 'list']),
    text: PropTypes.string.isRequired,
    textTranform: PropTypes.bool,
};

Title.defaultProps = {
    type: 'page',
    textTranform: true,
};

export default Title;
