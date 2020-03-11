import React from 'react';
import { PropTypes } from 'prop-types';
import { CELL_TYPES } from './constants';
import './TableCell.scss';

const TableCell = ({ value, type }) => {
  let content = value.toString();

  if (type === CELL_TYPES.CUSTOM) {
    const { Component, props } = value;
    content = <Component {...props} />
  }

  return (
    <td className="TableCell">
        {content}
    </td>
  );
}

TableCell.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string
};

export default TableCell;