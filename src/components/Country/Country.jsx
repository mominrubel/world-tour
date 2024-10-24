import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry }) => {

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };



  const { name, flags, population, area, cca3 } = country;
  console.log(country);

  return (
    <div className={`country-style ${visited && 'visited'}`}>
      <h2 style={{color: visited ? 'purple' : 'green'}}>Name: {name.common}</h2>
      <img src={flags.png} alt={`${name.common} flag`} />
      <p>Population: {population}</p>
      <p>Area: {area}</p> 
      <p><small>Code: {cca3}</small></p>
      <hr />
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'visited': 'going'}</button>
      {/* {visited && 'I have visited this country'} */}
      {visited ? 'I have visited this country' : 'I want ot visit'}
      <hr />
      <CountryDetail>
        country={country}
        handleVisitedCountry={handleVisitedCountry}
      </CountryDetail>
    </div>
  );
};

export default Country;
