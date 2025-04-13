import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectItems, selectVisibleItems } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

export default function ContactList( )  {
    const dispatch = useDispatch();
    const inputSearch = useSelector(selectNameFilter);
    const handleDeletePhone = (id) => {
        dispatch(deleteContact(id.id));
        };
    let filteredPhoneBook = [];
   
    if (inputSearch.length>0) {
        filteredPhoneBook = useSelector(selectVisibleItems); } 
    else { filteredPhoneBook = useSelector(selectItems); }
   
    return (
        <ul className={css.phoneUl}>
	        {filteredPhoneBook.map((phone,index) => {
                return (
                    <li key={phone.id}>
                        <Contact 
                                id={phone.id}
                                ind={index}
                                name={phone.name}  
                                number={phone.number}
                                handleDeletePhone={handleDeletePhone} />
                    </li>
                    );
            })}
        </ul>       
    );
  };
