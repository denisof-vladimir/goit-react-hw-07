import { useDispatch, useSelector } from 'react-redux';
import { changeFilters } from '../../redux/filtersSlice';
import { useState, useId, useEffect } from 'react'
import { fetchAll } from '../../redux/contactsOps'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  selectItems,
  selectIsLoading,
  selectIsError} from '../../redux/contactsSlice';
// import css from "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
   
  return (
    <main >
        <h1>Phonebook</h1>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />} 
       
        <ContactForm />
        <SearchBox />
        <ContactList   />
      </main>
  )
}

