
import React from 'react';
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'

const Display = ({formula,dispatch})=> {
  return (
    <FormControl value={formula}/>
  );
}

export default connect(state=>{return state})(Display);
