import React from 'react';

const Form = props => (
  <form className="form">
    <input className="input" onChange={props.onInputChange} value={props.term}></input>
    <button className="button" onClick={props.onFormSubmit}>Submit</button>
  </form>
);

export default Form;
