import React from 'react'

const UserFilter = ({city, cities, onCityChange}) => {
  return (
   <select className='border-outline-none' value={city} onChange={(e) => onCityChange(e.target.value)}>
    <option value="all">All Cities</option>
    {cities.map((city)=>{
      return <option key ={city} value={city}>{city}</option>
    })}
   </select>
  )
}

export default UserFilter