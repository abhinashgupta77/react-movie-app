import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.scss';

const TextInput = React.forwardRef(({
    error, icon, disabled, ...props
}, ref) => (
    <div className={`TextInput${error ? ' error' : ''}`}>
        <input
            type="text"
            className={`TextInput__field${icon ? ' TextInput__field--icon' : ''}${disabled ? ' TextInput--disabled' : ''}`}
            autoComplete="off"
            ref={ref}
            disabled={disabled}
            {...props}
        />
    </div>
));

TextInput.propTypes = {
    error: PropTypes.bool,
    disabled: PropTypes.bool,
};

TextInput.defaultProps = {
    error: false,
    disabled: false,
};

export default TextInput;
