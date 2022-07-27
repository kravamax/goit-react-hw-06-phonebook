import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import contactsActions from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterContainer}>
      <h4 className={s.title}>Find contacts by name</h4>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsActions.changeFilter(event.target.value))
        }
      ></input>
    </div>
  );
};

export default Filter;
