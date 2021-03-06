import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
