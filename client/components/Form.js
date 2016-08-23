import React from 'react'

const Form = React.createClass({
  getInitialState: function() {
    return {
      inputs: ['']
    };
  },
  handleSubmit: function() {
    const {state, props} = this
    const inputValues = state.inputs.map(input => input.value)
    props.addSearchTerms(inputValues)
  },
  handleAdd: function() {
    const {inputs} = this.state
    this.setState({inputs: inputs.concat([''])})
  },
  handleRemove: function() {
    const {inputs} = this.state
    const newInputs = inputs.length > 1 ? inputs.slice(0, -1) : inputs
    this.setState({inputs: newInputs})
  },
  render() {
    return (
      <div className="inputs">
        {this.state.inputs.map(
          (input, i) =>
            <input key={i} type="text" ref={(ref) => this.state.inputs[i] = ref}/>
          )
        }
        <div onClick={this.handleSubmit}>Submit Answers</div>
        <div onClick={this.handleAdd}>Add+</div>
        <div onClick={this.handleRemove}>Remove-</div>
      </div>
    )
  }
});

export default Form;
