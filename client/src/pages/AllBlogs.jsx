import axios from 'axios'
import { Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const AllBlogs = () => {

    
    const navigate=useNavigate()

    const [data,setdata]=useState([])
    const [err,seterr]=useState(false)

    const getblog=()=>{
        axios.get("http://localhost:8080/blog/getallblogsbyadmine",{withCredentials:true})
        .then((res)=>{
            setdata(res.data.allblogs)
            
            
        })
        .catch((err)=>{
            seterr(true)
            console.log(err)
        })
    }

    const handledelete=(id)=>{
        // axios.delete(`http://localhost:8080/blog/delete/${id}`,{withCredentials:true})
        // .then((res)=>{
        //     alert(res.data.message)
        //     getblog()
        //     // navigate("/getblog")
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }

    useEffect(()=>{
        getblog()
    },[])

  return err?<h1 style={{textAlign:"center",margin:"100px"}}>YOU ARE NOT AUTHORIZE TO ACESS THIS PAGE </h1> :(
    <div>

        <div style={{display:"flex",justifyContent:"center"}}><button style={{margin:"20px",padding:"5px 10px",backgroundColor:"red",color:"black",textAlign:"center"}}>DELETE ALL BLOGS</button></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"100%",margin:"auto",textAlign:"center"}}>
      {data.map((el)=>(
        <div>
        <Card className="m-3 shadow" style={{ maxWidth: '400px', borderRadius: '15px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th?id=OIP.EXNqs1uTNVyaql_lRvaeTgHaE4&pid=Api&P=0&h=180" // Placeholder image, you can replace it
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title className="text-primary">{el.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By {el.author}</Card.Subtitle>
          <Card.Text>{el.content}</Card.Text>
          <footer className="blockquote-footer">
            <small >Published on =={el.published_date}</small>
          </footer>
          
        </Card.Body>
      </Card>
      </div>
      ))}
      </div>
    </div>
  )
}

export default AllBlogs
