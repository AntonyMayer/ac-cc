import React from 'react';
import { PropTypes } from 'prop-types';
import { Spinner } from '../Spinner';
import TableRow from './TableRow';
import TableMessage from './TableMessage';
import { ROW_TYPES } from './constants';
import './Table.scss';

const Table = ({ headers, rows, isLoading, error }) => {
  let markup = (
    <table className="Table">
      <thead>
          <TableRow row={headers} type={ROW_TYPES.HEADER} />
      </thead>
      <tbody>
        {rows.map(props => <TableRow key={props.id} {...props} />)}      
      </tbody>
    </table>
  );

  if (isLoading) {
    markup = <TableMessage Component={Spinner} />;
  }

  if (error) {
    markup = <TableMessage message={error.message} />;
  }

  return markup;
} 

Table.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default Table;