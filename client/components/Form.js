import React from 'react'

const Form = React.createClass({
  handleSubmit: function() {
    this.props.makeQuery()
  },
  handleAdd: function() {
    this.props.addBlankInput('')
  },
  handleRemove: function() {
    this.props.removeLastInput()
  },
  handleChange: function(i, e) {
    this.props.updateInput(i, e.target.value)
  },
  render() {
    return (
      <div className="inputs">
        {this.props.inputs.map(
          (input, i) => <input key={i} type="text" defaultValue={input} onChange={this.handleChange.bind(this, i)}/>
        )}
        <div onClick={this.handleSubmit}>Submit Answers</div>
        <div onClick={this.handleAdd}>Add+</div>
        <div onClick={this.handleRemove}>Remove-</div>
      </div>
    )
  }
});

export default Form;
