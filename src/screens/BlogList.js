import React, { useState } from 'react'
import BlocgCard from '../Components/BlocgCard'
import LatestBlog from '../Components/LatestBlog'
import axios from 'axios'

function BlogList() {
  const [blog,setBlog]=useState('')
  const [latestBlog, setLatestBLog]=useState('')

  // const articles=[
  //   {
  //     title:'First Dynamic',
  //     content:'I am content',
  //     img:'https://cdn.shopify.com/s/files/1/0036/7637/3061/products/IMG-20220827-WA0000_600x600_crop_center.jpg?v=1661641582',

  //   },

  //   {
  //     title:'Dynamic',
  //      content:'i am content',
  //       img:'https://cdn.shopify.com/s/files/1/0036/7637/3061/products/IMG-20220827-WA0000_600x600_crop_center.jpg?v=1661641582',
  //   },
  //   {
  //     title:'Dynamic',
  //      content:'i am content',
  //       img:'https://cdn.shopify.com/s/files/1/0036/7637/3061/products/IMG-20220827-WA0000_600x600_crop_center.jpg?v=1661641582',
  //   },
  //   {
  //     title:'Dynamic',
  //      content:'i am content',
  //       img:'https://cdn.shopify.com/s/files/1/0036/7637/3061/products/IMG-20220827-WA0000_600x600_crop_center.jpg?v=1661641582',
  //   },
  //   {
  //     title:'Dynamic',
  //      content:'i am content',
  //       img:'https://cdn.shopify.com/s/files/1/0036/7637/3061/products/IMG-20220827-WA0000_600x600_crop_center.jpg?v=1661641582',
  //   },
  // ]
// const BASE_URL="https://jsonplaceholder.typicode.com/users"
const BASE_URL="https://newsapi.org/v2/top-headlines?country=in&apiKey=6cb0afdcad6a4b5cbbaf64437e0c0e24"
// const BASE_URL="https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=6cb0afdcad6a4b5cbbaf64437e0c0e24"
  React.useEffect(()=>{
    // console.log("Inside useeffect")
    axios.get(BASE_URL).then(
      (res)=>{
        console.log(res.data)
        setBlog(res.data.articles)
        setLatestBLog(res.data.articles.shift())
      }
    ).catch(
      err => console.log(err)
    )
  },[])

console.log("First blog",blog)
console.log("latest blog",latestBlog)

if (blog){
  return (
    <div className="container mx-auto mt-5">
      <LatestBlog 
      title={latestBlog.title}
      content={latestBlog.description}
      img={latestBlog.urlToImage}
      rm={latestBlog.url}
      
      />
      
   
        <div className='row'>
          {
            blog.map((value,index)=>(
              <BlocgCard
              title={value.title}
              content={value.description}
            img={value.urlToImage}
           rm={value.url}
          //  blogid={value.author}
            />
            )) 
          }
    </div>
    </div>
  );
    } else{
      return "sabar lena..."
    }
}

export default BlogList