import React from 'react';
import PropTypes from 'prop-types';

import './FullscreenLoader.scss';

import Loader from '../Loader';

const FullscreenLoader = ({ isOpen }) => {
    if (isOpen) {
        return (
             <div className="FullscreenLoader">
                <div className="FullscreenLoader__dialog">
                    <div className="FullscreenLoader__content">
                        <Loader size="large" isLoading />
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

FullscreenLoader.propTypes = {
    isOpen: PropTypes.bool,
};

FullscreenLoader.defaultProps = {
    isOpen: false,
};

export default FullscreenLoader;
