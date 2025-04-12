import { useDispatch, useSelector } from 'react-redux';
import { changeFilters } from '../../redux/filtersSlice';
import { useState, useId, useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import css from "./App.css";

export default function App() {

  const dispatch = useDispatch();
  const PhoneBook = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);
  const inputSearch = useSelector((state) => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilters( event.target.value));
  }
   
  return (
    <main >
        <h1>Phonebook</h1>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />} 
       
        <ContactForm />
        <SearchBox handleSearch={handleSearch} />
        <ContactList   />
      </main>
  )
}

