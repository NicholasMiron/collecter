import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTextField from './FormInput/InputTextField';
import InputDropDown from './FormInput/InputDropdown';
import InputNumber from './FormInput/InputNumber';
import InputYear from './FormInput/InputYear';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  handleEntryChange(e) {
    const newItem = { ...this.state.item };
    let { value } = e.target;

    if (e.target.type === 'number' || e.target.type === 'Year') value = Number(value);

    newItem[e.target.name] = value;
    this.setState({ item: newItem });
  }

  render() {
    return (
        <>
          {this.props.fields.map((field) => {
            const {
              type, name, maxLength, required, value, values, multiple, min, max, step,
            } = field.form;

            if (type === 'Text') {
              return (
                <InputTextField
                  name={name}
                  maxLength={maxLength}
                  required={required}
                  value={value}
                  handleChange={this.handleEntryChange.bind(this)}
                  labelText={name}
                />
              );
            }
            if (type === 'Fixed Dropdown') {
              return (
                <InputDropDown
                  name={name}
                  labelText={name}
                  required={required}
                  values={values}
                  multiple={multiple}
                  handleChange={this.handleEntryChange.bind(this)}
                />
              );
            }
            if (type === 'Number') {
              return (
                <InputNumber
                  name={name}
                  min={min}
                  max={max}
                  step={step}
                  required={required}
                  labelText={name}
                  handleChange={this.handleEntryChange.bind(this)}
                />
              );
            }
            if (type === 'Year') {
              return (
                <InputYear
                  name={name}
                  labelText={name}
                  handleChange={this.handleEntryChange.bind(this)}
                />
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
