import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const CollectionList = ({ allCollections, changeCollection, currentCollection }) => (
    <div>
      <Dropdown options={allCollections} value={currentCollection} onChange={changeCollection} placeholder={'Select An Option'}/>
    </div>
);


CollectionList.propTypes = {
  allCollections: PropTypes.array,
  changeCollection: PropTypes.func,
  currentCollection: PropTypes.string,
};

export default CollectionList;
