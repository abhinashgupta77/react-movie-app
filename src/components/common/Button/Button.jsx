import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

import { hasEmptyValue } from '../../../utils/helpers';

const Button = ({
    onClick,
    onClickIcon,
    type,
    text,
    icon,
    title,
    active,
    transparent,
    outline,
    warn,
    compact,
    reverse,
    disabled,
    className,
}) => {
    const extraClasses = useMemo(() => [
        active ? ' Button--active' : '',
        transparent ? ' Button--transparent' : '',
        outline ? ' Button--outline' : '',
        compact ? ' Button--compact' : '',
        reverse ? ' Button--reverse' : '',
        disabled ? ' Button--disabled' : '',
        warn ? ' Button--warn' : '',
        hasEmptyValue(className) ? '' : ` ${className}`,
    ].join(''), [active, transparent, outline, compact, reverse, disabled, className]);

    const onIconClick = (event) => {
        if (onClickIcon) {
            event.stopPropagation();
            event.preventDefault();
            onClickIcon(event);
        } else if (!disabled) {
            onClick(event);
        }
    };

    return (
        <button
            type={type === 'button' ? 'button' : 'submit'}
            className={`Button${extraClasses}`}
            title={(!hasEmptyValue(title) && !disabled) ? title : null}
            onClick={!disabled ? onClick : undefined}
        >
            {!hasEmptyValue(icon) && (
                <div
                    role="none"
                    className="Button__icon"
                    onClick={onIconClick}
                >
                    <img
                        src={icon}
                        alt='icon'
                    />
                </div>
            )}
            {!hasEmptyValue(text) && (
                <div className="Button__text">{text}</div>
            )}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    onClickIcon: PropTypes.func,
    type: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool,
    transparent: PropTypes.bool,
    outline: PropTypes.bool,
    compact: PropTypes.bool,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    warn: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    onClickIcon: null,
    type: 'button',
    text: '',
    icon: '',
    title: '',
    active: false,
    transparent: false,
    outline: false,
    compact: false,
    reverse: false,
    disabled: false,
    warn: false,
    className: '',
};

export default Button;
