"use client"

import { fetchUsers } from "@/services/api"
import { useEffect, useState } from "react"

export  function useFetch(){
    const[users,setUsers] =useState([])
      const[error,setError] =useState('')
         const[loading,setLoading] =useState(true)

useEffect(() =>{
    async function loadUsers(){
try{
const data =await fetchUsers();
setUsers(data)
}catch{
setError("Failed to fetch users")
}finally{
    setLoading(false)
}
    }

    loadUsers()
},[])



      return{users,error, loading}
 }