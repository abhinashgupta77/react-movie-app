import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

import { arrowleft, arrowright } from '../../../assets/icons';

import Button from '../Button';
import Text from '../Text';

const Pagination = ({
    currentPage,
    pageCount,
    onPageChange,
}) => {
    const changeToPage = useCallback((page) => {
        if ((currentPage !== 1) || (currentPage !== pageCount)) {
            onPageChange(page);
        }
    }, [currentPage, pageCount, onPageChange]);

    return (
        <div className="Pagination">
            <Text type="description" text={`Page ${currentPage} of ${pageCount}`} />
            <div className="Pagination__nav">
                <Button
                    icon={arrowleft}
                    onClick={() => changeToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    outline
                />
                <Button
                    icon={arrowright}
                    onClick={() => changeToPage(currentPage + 1)}
                    disabled={currentPage === pageCount}
                    outline
                />
            </div>
        </div>
    );
};

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
