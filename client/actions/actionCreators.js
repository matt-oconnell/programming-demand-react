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

export function addSearchTerms(terms) {
  return {
    type: 'ADD_SEARCH_TERMS',
    terms
  }
}