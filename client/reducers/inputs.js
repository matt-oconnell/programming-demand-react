function inputs(state = [], action) {
  let tempArr = null
	switch(action.type) {
    case 'UPDATE_INPUTS':
      const {i, val} = action
      tempArr = [ ...state ]
      tempArr[i] = val
			return tempArr
    case 'ADD_BLANK_INPUT':
      tempArr = [ ...state ]
      tempArr.push('test')
			return tempArr
    case 'REMOVE_LAST_INPUT':
      tempArr = [ ...state ]
      tempArr.pop()
			return tempArr
    case 'MAKE_QUERY':
      console.log('makin query!', state)
			return state
		default:
			return state
	}
}

export default inputs
