import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBlog = () => {
    const [title,settitle]=useState("")
    const [author,setauthor]=useState("")
    const [date,setdate]=useState("")
    const [content,setcontent]=useState("")
    const navigate=useNavigate()
    const {id}= useParams()

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8080/blog/update/${id}`,{title,content,date,author},{withCredentials:true})
        .then((res)=>{
            alert(res.data.message)
            navigate("/getblog")
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Update Blog</h2><br />
      <form onSubmit={handlesubmit}>
        {/* Title Field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter Title"
            required={true}
          />
        </div>

        {/* author Field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e)=>setauthor(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter Author"
            required={true}
          />
        </div>

        {/* content Field */}
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
          Content
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="4"
            placeholder="Enter Content"
            value={content}
            onChange={(e)=>setcontent(e.target.value)}
            required={true}
          ></textarea>
        </div>

        {/* date Field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e)=>setdate(e.target.value)}
            className="form-control"
            id="title"
            placeholder="Enter title"
            required={true}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form><br /><br /><br /><br />
    </div>
  );
}

export default UpdateBlog
