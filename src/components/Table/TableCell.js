import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { CELL_TYPES } from './constants';
import './TableCell.scss';

const TableCell = ({ value, type }) => {
  const cellContent = React.createRef();
  let [ isOverflown, setOverflown ] = useState(false);
  let [ isOpen, setOpen ] = useState(false);
  let content = value.toString();

  if (type === CELL_TYPES.CUSTOM) {
    const { Component, props } = value;
    content = <Component {...props} />
  }

  useEffect(() => {
    const { current: element } = cellContent;
    const hasOverflow = element.offsetWidth < element.scrollWidth;
    
    if (hasOverflow) setOverflown(true);
  }, [ cellContent ]);

  return (
    <td className="TableCell">
        <div 
          className={`TableCell__content
            ${isOverflown ? 'TableCell__content--overflown' : ''}
            ${isOverflown && isOpen ? 'TableCell__content--open' : ''}
          `}
          onClick={() => setOpen(!isOpen)}
          ref={cellContent}
        >
          {content}
        </div>
    </td>
  );
}

TableCell.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string
};

export default TableCell;