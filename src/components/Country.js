import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <img style={{width:200}} src={country.flag} alt={country.name} />
      <h2>{country.name}</h2>
      <p>{country.capital || 'Baskent yok!'}</p>
    </div>
  );
};

export default Country;
