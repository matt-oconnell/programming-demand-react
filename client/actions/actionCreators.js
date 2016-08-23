import $ from 'jquery'

export function newExample() {
  return function(dispatch) {
    return $.get(`http://matto.xyz`).then(
      data => {
        //change route
        dispatch(newExampleAction(data))
      },
      error => console.log('Error', error)
    )
  }
}

function newExampleAction(example) {
  return {
    type: 'NEW_EXAMPLE',
    example
  }
}

export function updateInput(i, val) {
  return {
    type: 'UPDATE_INPUTS',
    i,
    val
  }
}

export function addBlankInput() {
  return {
    type: 'ADD_BLANK_INPUT'
  }
}

export function removeLastInput() {
  return {
    type: 'REMOVE_LAST_INPUT'
  }
}

export function makeQuery() {
  return {
    type: 'MAKE_QUERY'
  }
}