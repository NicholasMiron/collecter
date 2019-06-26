import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import TableWrapper from './Table';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      currentCollection: '',
      modal: false,
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

  componentDidMount() {
    axios.get('/api/collections')
      .then((results) => {
        this.setState({ allCollections: results.data });
      });
  }

  changeCollection({ value }) {
    axios.get(`/api/collections?name=${value}`)
      .then(({ data }) => {
        this.setState(
          {
            currentCollection: data.collection_name,
            columns: data.fields,
            data: data.items,
          }, this.setState(this.state),
        );
      });
  }

  addPiece() {
    console.log(this.state);
    this.setState({ modal: true });
  }

  hideModal() {
    this.setState({ modal: false });
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
        <Footer addPiece={this.addPiece.bind(this)} />
        <Modal displayed={this.state.modal} hideModal={this.hideModal.bind(this)}/>
      </div>
    );
  }
}

export default App;
