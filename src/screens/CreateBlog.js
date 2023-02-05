import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateBlog() {
  const history=useNavigate()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null)
  const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6cb0afdcad6a4b5cbbaf64437e0c0e24"
  const config = {
    headers: {
      'content-Type': 'multipart/form-data'
    }
  }

  let publishBlog = async () => {
    let formData = new FormData() //use to make object using formdata it is  a class

    // multipart/for-data ==> data have file with string and integer
    //application/json
    //application/xml

    if (title !== "" && content !== "" && image !== "") {

      console.log(title)
      console.log(content)
      console.log(image)

      formData.append("title", title)
      formData.append("description", content)
      formData.append("urlToImage", image)

      await axios.post(url, formData, config).then(
        (res) => {
          console.log("Done")
          console.log(res)

          setImage(null)
          setTitle("")
          setContent("")

          history.push("/")
        }
      ).catch(
        err => console.log(err)
      )
    } else {
      alert("Empty data cannot publish")
    }
  }

  return (
    <div className='container mx-auto mt-5'>
      <div className="row">
        <div className="float-end">
          <button className='btn btn-outline-dark' onClick={publishBlog}>Publish</button>
        </div>
        <div className="col-12">
          <h4>Image</h4>
        </div>
        <div className="form-control col-12">
          <input
            type="file"
            accept='image/*'
            // multiple to select multiple images
            className=" inputField"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="col-12">
          <h4>Title</h4>
        </div>
        <div className="form col-12">
          <input type="text" placeholder='Write title here' className=" inputField"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-12">
          <h4>Content</h4>
        </div>
        <div className="form-control col-12">
          <textarea id='blog' placeholder='Write content here' name="" cols="30" rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>

    </div>
  )
}

export default CreateBlog