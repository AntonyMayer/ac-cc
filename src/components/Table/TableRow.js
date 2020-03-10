import React from 'react';
import { PropTypes } from 'prop-types';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import { ROW_TYPES } from './constants';

const TableRow = ({ row, type }) => {
  const Cell = type === ROW_TYPES.HEADER ? TableHeader : TableCell;

  return (
    <tr className='TableRow'>
      {row.map(props => <Cell key={props.id} {...props} />)}
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.array
};

export default TableRow;