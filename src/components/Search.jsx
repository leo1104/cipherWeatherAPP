import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {

//extract the country name and store it in a state

const [countryName, setCountryName] = useState('');
const navigate = useNavigate();

// on search btn click reroute to /search/countyName and the country name will be 
// dynamic and use the concept of SPA


function reroute() {
    navigate(`/search/${countryName}`)
}

  return (
    <div>
        <input placeholder='Search country' onChange={e=>setCountryName(e.target.value)} value={countryName} />
        <button onClick={reroute}>Search</button>
    </div>
  )
}

export default Search