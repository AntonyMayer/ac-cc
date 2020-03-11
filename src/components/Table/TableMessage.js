import React from 'react';
import { PropTypes } from 'prop-types';
import './TableMessage.scss';

const TableMessage = ({ message, Component }) => (
  <div className="TableMessage">
    {message || <Component /> || 'Something went wrong ¯\\_(ツ)_/¯'}
  </div>
);

TableMessage.propTypes = {
  message: PropTypes.string,
  Component: PropTypes.elementType
};

export default TableMessage;