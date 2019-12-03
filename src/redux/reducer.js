
const defaultState = {
  formula:""
};

const reducer = ( state=defaultState, action )=> {
  let result = state, { formula } = state;
  switch (action.type) {
    case 'INPUT':
      if ( action.value === '<' ){
        formula = formula.substring(0,formula.length-1);
      }
      else if ( action.value === '=' ){
        try {
          formula = eval( formula ).toString()
        } catch(e){};
      }
      else {
        formula = formula + action.value;
      }
      result = { ...state, formula: formula };
      break;
    default: }
  return result;
};

export default reducer;
