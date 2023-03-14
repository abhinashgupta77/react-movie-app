import React from 'react';
import PropTypes from 'prop-types';

import './ListOption.scss';

import Text from '../Text';

const ListOption = ({
    text, className, onClick, disabled,
}) => (
    <div
        className={`ListOption ${className}${disabled ? ' ListOption--disabled' : ''}`}
        onClick={!disabled ? onClick : undefined}
        role="none"
    >
        <Text text={text} type="listoption" className="ListOption__content-padding" />
    </div>
);

ListOption.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

ListOption.defaultProps = {
    className: '',
    onClick: () => { },
    disabled: false,
};

export default ListOption;
