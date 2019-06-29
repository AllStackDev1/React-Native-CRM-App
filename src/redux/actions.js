import { SELECTED_PERSON, DESELECT_PERSON } from '../constant/actionType'

export const selectPerson = peopleId => ({
  type: SELECTED_PERSON,
  payload: peopleId
});

export const deselectPerson = () => ({
  type: DESELECT_PERSON
});
