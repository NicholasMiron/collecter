import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputDropDown from './FormInput/InputDropdown';

class AddField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: '',
      dropdownValues: [],
    };
  }

  // Sets the type of input and resets form data
  handleTypeSelect(e) {
    this.setState({ inputType: e.target.value, form: { type: e.target.value, required: false } });
  }

  // Set state on entry change
  handleEntryChange(e) {
    const newForm = { ...this.state.form };
    newForm[e.target.name] = e.target.value;
    this.setState({ form: newForm });
  }

  // Set state on checkbox change
  handleCheckboxChange(e) {
    const newForm = { ...this.state.form };
    newForm[e.target.name] = e.target.checked;
    this.setState({ form: newForm });
  }

  handleDataList(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const newForm = { ...this.state.form };
      if (!newForm.values) newForm.values = [];

      newForm.values.push(e.target.value);
      this.setState({ form: newForm });
    }
  }

  removeDataListItem(i) {
    const values = this.state.dropdownValues;
    values.splice(i, 1);
    this.setState({ dropdownValues: values });
  }

  render() {
    let options;

    const required = (
      <div className={'formItem'}>
        <label htmlFor={'required'}>Is it required?</label>
        <input type={'checkbox'} name={'required'} onChange={this.handleCheckboxChange.bind(this)}/>
      </div>
    );

    const submit = (
      <input type={'button'} value={'Submit'} onClick={() => this.props.submitField({ Header: this.state.form.name, accessor: this.state.form.name, form: this.state.form })}/>

    );

    const fieldName = (
      <div className={'formItem'}>
        <label htmlFor={'name'}>Field Name</label>
        <input type={'text'} name={'name'} required={true} onChange={this.handleEntryChange.bind(this)}/>
      </div>
    );
    if (this.state.inputType === 'Text') {
      options = (
        <>
          {required}
          {fieldName}
          <div className={'formItem'}>
            <label htmlFor={'maxLength'}>Max Length</label>
            <input
              type={'number'}
              name={'maxLength'}
              min={'10'}
              max={'250'}
              step={'10'}
              required={true}
              onChange={this.handleEntryChange.bind(this)}
            />
          </div>
        </>
      );
    } else if (this.state.inputType === 'Number') {
      options = (
        <>
          {required}
        </>
      );
    } else if (this.state.inputType === 'Fixed Dropdown') {
      options = (
        <>
          {required}
          {fieldName}
          <div className={'formItem'}>
            <label htmlFor='values'>Dropdown Values</label>
            <input type={'text'} onKeyDown={this.handleDataList.bind(this)}/>
            <ul>
              {this.state.form.values ? this.state.form.values.map((item, i) => (
                <>
                  <li key={i}>{item}</li>
                  <div onClick={() => this.removeDataListItem(i)}>X</div>
                </>
              )) : <></>}
            </ul>
          </div>
          <div className={'formItem'}>
            <label htmlFor={'multiple'}>Select Multiple Options</label>
            <input type={'checkbox'} name={'multiple'}/>
          </div>
        </>
      );
    } else if (this.state.inputType === 'Date') {
      options = (
        <>
          {required}
          <div className={'formItem'}>
            <InputDropDown
              name={'format'}
              required={true}
              values={['YYYY', 'MM/YYYY', 'DD/MM/YYYY']}
              placeholder={'Date Format'}
            />
          </div>
        </>
      );
    }


    return (
      <>
        <div className={'formItem'}>
          <InputDropDown
            name={'type'}
            required={true}
            values={['Text', 'Number', 'Date', 'Fixed Dropdown', 'Toggle', 'Checkboxs', 'Radio', 'Currency']}
            placeholder={'What type of input would you like to add?'}
            handleChange={this.handleTypeSelect.bind(this)}
          />
        </div>
        {/* {options ? required : <></>} */}
        {options}
        {options ? submit : <></>}
      </>
    );
  }
}

AddField.propTypes = {
  submitField: PropTypes.func,
};

export default AddField;
