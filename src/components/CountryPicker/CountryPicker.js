import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./countryPicker.css";
import { fetchCountry } from "../../api";
function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const countries = async () => {
      setFetchCountries(await fetchCountry());
    };
    countries();
  }, []);
  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
export default CountryPicker;
