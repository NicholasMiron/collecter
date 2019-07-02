import React from 'react';
import PropTypes from 'prop-types';
import CollectionList from './Collections';

const Header = ({
  allCollections, changeCollection, currentCollection, addCollection,
}) => (
  <header>
    <div>Some Name</div>
    <div>Search</div>
    <div onClick={addCollection}>Add Collection</div>
    <CollectionList
      allCollections={allCollections}
      changeCollection={changeCollection}
      currentCollection={currentCollection}
    />
  </header>
);

Header.propTypes = {
  allCollections: PropTypes.array,
  changeCollection: PropTypes.func,
  currentCollection: PropTypes.string,
  addCollection: PropTypes.func,
};

export default Header;
