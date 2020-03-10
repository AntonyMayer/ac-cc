import React from 'react';
import { PropTypes } from 'prop-types';
import { CELL_TYPES } from './constants';
import './TableCell.scss';

const TableCell = ({ value, type }) => {
  let content = value;

  if (type === CELL_TYPES.CUSTOM) {
    const { props, Component } = value;
    content = <Component {...props} />
  }

  return (
    <td className="TableCell">
        {content}
    </td>
  );
}

TableCell.propTypes = {
  // value: PropTypes.one,
  type: PropTypes.string
};

export default TableCell;