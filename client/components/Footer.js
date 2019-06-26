import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ addPiece }) => (
  <div id='footer'>
    <div>Generate Report</div>
    <div>Edit Collection Fields</div>
    <div onClick={() => addPiece()}>Add Item</div>
  </div>
);

export default Footer;

Footer.propTypes = {
  addPiece: PropTypes.func,
};
