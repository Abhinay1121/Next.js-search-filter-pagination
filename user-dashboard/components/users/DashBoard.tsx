"use client";
import React, { useEffect, useState } from "react";
import UserFilter from "./UserFilter";
import UserSearch from "./UserSearch";
import Usertable from "./Usertable";
import Pagination from "./Pagination";
// import { useUsers } from "@/hooks/useUsers";
import { useFetch } from "@/hooks/useFetch";

const DashBoard = () => {
      const [search, setSearch] = useState("");
      const[city, setCity] =useState("all")
const{users, error, loading} =useFetch()
const[page, setPage] =useState(1)

const pageSize=5


        // Reset pagination when search changes
  function handleSearchChange(value: string) {
    setSearch(value);
  setPage(1);
  }


          // Reset pagination when search changes
  function handleCityChange(value: string) {
    setCity(value);
  setPage(1);
  }
  console.log("users", users)
// const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function loadUsers() {
//       try {
//         const response =await fetch("https://jsonplaceholder.typicode.com/users")
//  const data  = await response.json()
//         setUsers(data);
//       } catch {
//         setError("failed to fetch data");
//       }
//     }
//     loadUsers();
//   }, []);


const cities = [...new Set(users.map((user) =>user.address.city))]

const filterdUsers = users.filter((user) =>{
const matchedUsers =  `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
 const matchedCity = city === "all" || user.address.city ===city
   return matchedUsers && matchedCity
})
 



const totalPages = Math.max(1, Math.ceil(filterdUsers.length/pageSize))
 if(error){
  return<p className="bg-red-600">{error}</p>
 }
const  loader =  () =>{
  if(loading){
  return(
    <>
  <div className="flex align-center w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</>
  )

}}
 
 const paginatedUsers = filterdUsers.slice((page-1)*pageSize, page*pageSize)
  return (
    <section>
  
      <UserSearch 
      search={search}
       onSearchChange ={handleSearchChange}/>
      <UserFilter city={city} cities={cities} onCityChange={handleCityChange} />
      <Usertable users ={paginatedUsers} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
};

export default DashBoard;
