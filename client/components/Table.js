import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const TableWrapper = ({ columns, data }) => (
  <ReactTable columns={columns} data={data} />
);

TableWrapper.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

export default TableWrapper;
