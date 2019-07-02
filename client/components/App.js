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
      formType: '',
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
        this.setState(
          {
            currentCollection: data.collection_name,
            columns: data.fields,
            data: data.items,
          },
        );
      });
  }

  addItem() {
    this.setState({ formType: 'addItem' });
  }

  addField() {
    this.setState({ formType: 'addField' });
  }

  addCollection() {
    const name = window.prompt('Name of collection to add');
    axios.post('/api/collections', { name })
      .then(() => {
        this.setState({ currentCollection: name });
      })
      .catch(err => console.log(err));
  }

  submitField(newField) {
    axios.post(`/api/collections/${this.state.currentCollection}/fields`, {
      field: { ...newField },
    });
  }

  submitItem(item) {
    axios.post(`/api/collections/${this.state.currentCollection}/items`, { item })
      .then(() => {
        const newData = [...this.state.data];
        newData.push(item);
        this.setState({ data: newData });
      });
  }

  hideModal(e) {
    this.setState({ formType: '' });
  }


  render() {
    return (
      <div>
        <Header
          allCollections={this.state.allCollections}
          currentCollection={this.state.currentCollection}
          changeCollection={this.changeCollection.bind(this)}
          addCollection={this.addCollection.bind(this)}
        />
        <TableWrapper
          data={this.state.data}
          columns={this.state.columns}
        />
        <Footer
          addField={this.addField.bind(this)}
          addItem={this.addItem.bind(this)}
        />
        <Modal
          formType={this.state.formType}
          columns={this.state.columns}
          hideModal={this.hideModal.bind(this)}
          submitField={this.submitField.bind(this)}
          submitItem={this.submitItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;
