import React from 'react';
import { PropTypes } from 'prop-types';
import './TableHeader.scss';

const TableHeader = ({ value }) => <th className="TableHeader">{value}</th>;

TableHeader.propTypes = { value: PropTypes.string };

export default TableHeader;