import React from 'react';
import PropTypes from 'prop-types';

import { loader } from '../../../assets/icons';
import './Loader.scss';

const Loader = ({ size, isLoading }) => (
    isLoading && <div className="Loader"><img alt="Loading" className={`Loader--${size}`} src={loader} /></div>
);

Loader.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isLoading: PropTypes.bool,
};

Loader.defaultProps = {
    size: 'small',
    isLoading: false,
};

export default Loader;
