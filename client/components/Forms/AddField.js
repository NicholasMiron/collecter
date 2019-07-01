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

  handleTypeSelect(e) {
    this.setState({ inputType: e.target.value }, () => console.log(this.state.inputType));
  }

  handleDataList(e) {
    if (e.keyCode === 13) {
      const values = this.state.dropdownValues;
      values.push(e.target.value);
      this.setState({ dropdownValues: values });
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
      <div className='formItem'>
        <label htmlFor="required">Is it required?</label>
        <input type="checkbox" name="required" required={true} />
      </div>
    );

    const submit = (
      <input type='button' value='Submit'/>

    );

    switch (this.state.inputType) {
      case 'Text':
        options = (
            <>
              <div className='formItem'>
                <label htmlFor='name'>Field Name</label>
                <input type='text' name='name' required={true}/>
              </div>
              <div className='formItem'>
                <label htmlFor='length'>Max Length</label>
                <input type='number' min='10' max='250' step='10' defaultValue='40' required={true}/>
              </div>
            </>
        );
        break;
      case 'Number':
        options = (
            <>
            </>
        );
        break;
      case 'Fixed Dropdown':
        options = (
        <>
          <div className='formItem'>
            <label htmlFor='name'>Field Name</label>
            <input type='text' name='name' required={true}/>
          </div>
          <div className='formItem'>
            <label htmlFor='values'>Dropdown Values</label>
            <input type='text' onKeyDown={this.handleDataList.bind(this)}/>
            <ul>
              {this.state.dropdownValues.map((item, i) => (
                <>
                  <li key={i}>{item}</li>
                  <div onClick={() => this.removeDataListItem(i)}>X</div>
                </>
              ))}
            </ul>
          </div>
          <div className='formItem'>
            <label htmlFor='multiple'>Select Multiple Options</label>
            <input type='checkbox' name='multiple'/>
          </div>
        </>
        );
        break;
      case 'Date':
        options = (
          <>

          </>
        );
        break;
      default:
        break;
    }

    return (
      <>
        <div className='formItem'>
          <InputDropDown
            name={'type'}
            required={true}
            values={['Text', 'Number', 'Date', 'Fixed Dropdown', 'Toggle', 'Checkboxs', 'Radio', 'Currency']}
            placeholder={'What type of input would you like to add?'}
            handleChange={this.handleTypeSelect.bind(this)}
          />
        </div>
        {options ? required : <></>}
        {options}
        {options ? submit : <></>}
      </>
    );
  }
}

AddField.propTypes = {

};

export default AddField;
