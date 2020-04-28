import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../service';
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {

    const[fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {

        const getCountries = async () => {
            setFetchedCountries(await fetchCountries());
        } 

        getCountries();

    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=""> Global </option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;