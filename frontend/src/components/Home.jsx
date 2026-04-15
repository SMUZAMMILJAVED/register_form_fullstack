import React, { useEffect, useState } from 'react'

const Home = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setData(data));
  },[])
  
  return (
    <div>
      Home
      <h1>data : {data.title}</h1>
      <h1>isStock : {data?.completed?.toString()}</h1>
    </div>
  )
}

export default Home
