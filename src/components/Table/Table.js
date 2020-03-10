import React from 'react';
import { PropTypes } from 'prop-types';
import { Spinner } from '../Spinner';
import TableRow from './TableRow';
import { ROW_TYPES } from './constants';
import './Table.scss';

const Table = ({ isLoading, headers, rows }) => {
  const tableMarkup = (
    <table className="Table">
      <thead>
          <TableRow row={headers} type={ROW_TYPES.HEADER} />
      </thead>
      <tbody>
        {rows.map(props => <TableRow key={props.id} {...props} />)}      
      </tbody>
    </table>
  );

  return isLoading ? <Spinner /> : tableMarkup;
}

Table.propTypes = {
  isLoading: PropTypes.bool,
  headers: PropTypes.array,
  rows: PropTypes.array
};

export default Table;