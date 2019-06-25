import React from 'react';
import PropTypes from 'prop-types';
import CollectionList from './Collections';

const Header = ({ allCollections, changeCollection, currentCollection }) => (
    <header>
      <div>Some Name</div>
      <div>Search</div>
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
};

export default Header;
