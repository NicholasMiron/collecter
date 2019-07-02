import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTextField from './FormInput/InputTextField';
import InputDropDown from './FormInput/InputDropdown';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  handleEntryChange(e) {
    const newItem = { ...this.state.item };
    newItem[e.target.name] = e.target.value;
    this.setState({ item: newItem });
  }

  render() {
    return (
        <>
          {this.props.fields.map((field) => {
            const {
              type, name, maxLength, required, value, label, values, multiple,
            } = field.form;

            if (type === 'Text') {
              return (
                <InputTextField name={name} maxLength={maxLength} required={required} value={value} handleChange={this.handleEntryChange.bind(this)} labelText={name}/>
              );
            } if (type === 'Fixed Dropdown') {
              return (
                <InputDropDown name={name} labelText={name} required={required} values={values} multiple={multiple} handleChange={this.handleEntryChange.bind(this)}/>
              );
            }
            return <></>;
          })}
          <div id={'formItem'}>
            <input type={'button'} onClick={() => this.props.submitItem(this.state.item)} value={'Submit'}/>
          </div>
        </>
    );
  }
}

AddItem.propTypes = {
  fields: PropTypes.array,
  submitItem: PropTypes.func,
};

export default AddItem;
