import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './SearchDropdown.scss';

import Text from '../Text';
import TextInput from '../TextInput';
import Button from '../Button';
import ListOption from '../ListOption';
import Dropdown from '../Dropdown';

import { search } from '../../../assets/icons'

import { hasEmptyValue } from '../../../utils/helpers';
import useOnClickOutside from '../../../utils/useOnClickOutside';

const SearchDropdown = ({
    className,
    searchText,
    onChangeInput,
    onSelect,
    results,
    resultsHeading,
    showResults,
    displayKey,
    idKey,
    value,
    iconType,
    disabled,
}) => {
    const [canShowResults, setCanShowResults] = useState(false);
    const inputRef = useRef(null);
    const bodyRef = useRef(null);

    useOnClickOutside(bodyRef, setCanShowResults);

    return (
        <div
            role="none"
            className={`SearchDropdown ${className}`.trimEnd()}
            ref={bodyRef}
            onClick={() => {
                if (!disabled) {
                    setCanShowResults(true);
                }
            }}
        >
            <TextInput
                placeholder={searchText}
                ref={inputRef}
                value={value}
                disabled={disabled}
                onChange={(event) => onChangeInput(event.target.value, event)}
            />
            <Button
                icon={search}
                active={iconType === 'active'}
                disabled={disabled}
                onClick={() => inputRef.current.focus()}
            />
            {canShowResults && showResults && (
                <Dropdown className="SearchDropdown__results">
                    {
                        !hasEmptyValue(resultsHeading) && (
                            <div className="SearchDropdown__results-heading">
                                {resultsHeading}
                            </div>
                        )
                    }
                    {
                        results.map((result) => (
                            <ListOption
                                key={results[idKey]}
                                text={result[displayKey]}
                                onClick={((event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    setCanShowResults(false);
                                    onSelect(result);
                                })}
                            />
                        ))
                    }
                    {
                        hasEmptyValue(resultsHeading)
                        && hasEmptyValue(results)
                        && !hasEmptyValue(value) && (
                            <Text
                                text={'We couldn\'t find anything matching your search'}
                                type="listoption"
                            />
                        )
                    }
                </Dropdown>
            )}
        </div>
    );
};

SearchDropdown.propTypes = {
    searchText: PropTypes.string,
    className: PropTypes.string,
    onChangeInput: PropTypes.func,
    onSelect: PropTypes.func,
    results: PropTypes.array,
    resultsHeading: PropTypes.string,
    showResults: PropTypes.bool,
    displayKey: PropTypes.string,
    idKey: PropTypes.string,
    value: PropTypes.string,
    iconType: PropTypes.oneOf(['active', '']),
    disabled: PropTypes.bool,
};

SearchDropdown.defaultProps = {
    searchText: 'Search',
    className: '',
    onChangeInput: () => { },
    onSelect: () => { },
    results: [],
    resultsHeading: '',
    showResults: false,
    displayKey: 'text',
    idKey: 'id',
    value: '',
    iconType: '',
    disabled: false,
};

export default SearchDropdown;
