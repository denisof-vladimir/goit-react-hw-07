import { useDispatch, useSelector } from 'react-redux';
import { changeFilters } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useId } from 'react'


  
export default function SearchBox({handleSearch}) {
 
    const inputSearch = useSelector((state) => state.filters.name);
    return (
        <div className={css.searchBox}>
          <label className={css.label}>
            Find contacts by name :
            <input
              className={css.input}
              type="text"
              value={inputSearch}
              onChange={(e) => handleSearch(e)}
            />
          </label>
        </div>
      );
    }