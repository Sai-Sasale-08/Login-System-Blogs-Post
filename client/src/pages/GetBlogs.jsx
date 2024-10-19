import axios from 'axios'
import { Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const GetBlogs = () => {
    const navigate=useNavigate()

    const [data,setdata]=useState([])

    const getblog=()=>{
        axios.get("http://localhost:8080/blog/getblog",{withCredentials:true})
        .then((res)=>{
            setdata(res.data.blogsdata)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handledelete=(id)=>{
        axios.delete(`http://localhost:8080/blog/delete/${id}`,{withCredentials:true})
        .then((res)=>{
            alert(res.data.message)
            getblog()
            // navigate("/getblog")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getblog()
    },[])

  return (
    <div>
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
          <div style={{display:"flex",justifyContent:"space-around"}}>
          <Button variant="primary" className="mt-3">
            <Link to={`/update/${el._id}`}>Update</Link>
          </Button>

          <Button variant="danger" className="mt-3" onClick={()=>handledelete(el._id)}>
            Delete
          </Button>
          </div>
        </Card.Body>
      </Card>
      </div>
      ))}
    </div>
  )
}

export default GetBlogs
