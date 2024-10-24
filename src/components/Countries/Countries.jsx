import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


const handleVisitedCountry = country =>{
    console.log ('add this to your visited country')
    const newVisitdCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitdCountries)
}


    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <div>
                <h5>Visited countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="countries-style">
            {
                countries.map(country => <Country 
                    key={countries.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;