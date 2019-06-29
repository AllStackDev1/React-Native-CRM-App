import { SELECTED_PERSON, DESELECT_PERSON } from '../constant/actionType'

import people from './../data/people.json';

const initialState = {
  people,
  detailView: false,
  personSelected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PERSON:
      return { ...state, detailView: true, personSelected: action.payload }
    case DESELECT_PERSON:
      return { ...state, detailView: false, personSelected: null }
    default:
      return { ...state }
  }
}