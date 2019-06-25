import React, { Component } from 'react';
import Header from './Header';
import TableWrapper from './Table';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [
        'coins',
        'stamps',
        'cars',
      ],
      currentCollection: '',
      columns: [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
        { Header: 'Friend', accessor: 'friend' },
      ],
      data: [
        { name: 'nick', age: 22, friend: 'Santa' },
        {
          name: 'bill', age: 99, friend: 'Cats', food: 'pickle',
        },
        {
          name: 'frank', friend: 'Mickey Mouse',
        },
      ],
    };
  }

  changeCollection({ value }) {
    // TODO -> Get all items for the selected collection
    this.setState({ currentCollection: value });
  }

  render() {
    return (
      <div>
        <Header
          allCollections={this.state.allCollections}
          currentCollection={this.state.currentCollection}
          changeCollection={this.changeCollection.bind(this)}
        />
        <TableWrapper
          data={this.state.data}
          columns={this.state.columns}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
