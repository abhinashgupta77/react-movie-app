import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/components/Header.scss';

import SearchDropdown from './common/SearchDropdown';

import { useSearchMovies } from '../api/movie';
import { goToMovieDetails } from '../utils/navigationHelpers';

const Header = ({ disableOptions, children }) => {
    const [movieSearchText, setMovieSearchText] = useState('');

    const {
        data: { results: movies = [] } = {},
        isLoading,
    } = useSearchMovies({
        name: movieSearchText,
    });

    return (
        <div className="Header">
            {children}
            {
                !disableOptions && (
                    <div className="Header__actions">
                        <SearchDropdown
                            searchText='search'
                            results={movies}
                            resultsHeading={isLoading ? 'Searching...' : ''}
                            showResults={isLoading || movies?.length > 0
                                || movieSearchText.trim().length > 2}
                            displayKey="title"
                            idKey="id"
                            value={movieSearchText}
                            onChangeInput={setMovieSearchText}
                            onSelect={(selection) => {
                                goToMovieDetails(selection.id);
                                setMovieSearchText('');
                            }}
                        />
                    </div>
                )
            }
        </div>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    disableOptions: PropTypes.bool,
};

Header.defaultProps = {
    disableOptions: false,
};

export default Header;
