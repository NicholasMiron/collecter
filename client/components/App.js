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
      columns: [],
      data: [],
      modal: false,
    };
  }

  componentDidMount() {
    axios.get('/api/collections')
      .then(({ data }) => {
        const allCollections = data.map(col => col.collection_name);
        this.setState(
          {
            allCollections,
            currentCollection: data[0].collection_name,
            columns: data[0].fields,
            data: data[0].items,
          },
        );
      });
  }

  changeCollection({ value }) {
    axios.get(`/api/collections/${value}`)
      .then(({ data }) => {
        [data] = data;
        this.setState(
          {
            currentCollection: data.collection_name,
            columns: data.fields,
            data: data.items,
          },
        );
      });
  }

  addPiece() {
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
