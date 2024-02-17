import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [mydata,setmydata]=useState([])
  const [myerror,setmyerror]=useState("")
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res)=>
  //   setmydata(res.data)
  //   ).catch((error)=> setmyerror(error.message))
  // },[])

  const getapidata=async()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setmydata(res.data)
    } catch (error) {
      setmyerror(error.message)
    }
    
  }
  useEffect(()=>{
    getapidata();
  },[])


  return (
   <div className="f">
    <h1>axios</h1>
    {myerror != " " && <h2>{myerror}</h2>}
    {mydata.map((post)=>{
      const {id,title,body}=post;
      return  <div className="card" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    })}
   </div>
  )
}

export default App
