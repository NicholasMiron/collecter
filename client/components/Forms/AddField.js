import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputDropDown from './FormInput/InputDropdown';
import InputNumber from './FormInput/InputNumber';
import InputToggle from './FormInput/InputToggle';

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
    if (e.keyCode === 13) {
      const newForm = { ...this.state.form };

      if (!newForm[e.target.name]) newForm[e.target.name] = [];

      newForm[e.target.name].push(e.target.value);
      this.setState({ form: newForm });
    }
  }

  removeDataListItem(i) {
    const newForm = { ...this.state.form };
    const choice = newForm.values ? 'values' : 'options';
    newForm[choice].splice(i, 1);
    this.setState({ form: newForm });
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
          {fieldName}
          <InputNumber name={'min'} labelText={'min value for input'} handleChange={this.handleEntryChange.bind(this)}/>
          <InputNumber name={'max'} labelText={'Max value for input'} handleChange={this.handleEntryChange.bind(this)}/>
          <InputNumber name={'step'} labelText={'Step amount for input'} handleChange={this.handleEntryChange.bind(this)}/>
        </>
      );
    } else if (this.state.inputType === 'Fixed Dropdown') {
      options = (
        <>
          {required}
          {fieldName}
          <div className={'formItem'}>
            <label htmlFor='values'>Dropdown Values</label>
            <input type={'text'} name={'values'} onKeyDown={this.handleDataList.bind(this)}/>
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
          {fieldName}
          <InputDropDown
            name={'format'}
            required={true}
            values={['YYYY', 'MM/YYYY', 'DD/MM/YYYY']}
            labelText={'Date Format'}
            handleChange={this.handleEntryChange.bind(this)}
          />
        </>
      );
    } else if (this.state.inputType === 'Toggle') {
      options = (
        <>
          {required}
          {fieldName}
          <div className={'formItem'}>
            <InputToggle name={'defaultOn'} labelText={'Default toggle to on?'} />
          </div>
        </>
      );
    } else if (this.state.inputType === 'Radio') {
      options = (
        <>
          {required}
          {fieldName}
          <div className={'formItem'}>
            <label htmlFor={'options'}>Radio Options</label>
            <input type={'text'} name={'options'} onKeyDown={this.handleDataList.bind(this)}/>
            <ul>
              {this.state.form.options ? this.state.form.options.map((item, i) => (
                <>
                  <li key={i}>{item}</li>
                  <div onClick={() => this.removeDataListItem(i)}>X</div>
                </>
              )) : <></>}
            </ul>
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
            labelText={'What type of input would you like to add?'}
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
