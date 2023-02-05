import React from 'react'
// import bg from '../img/android.jpg'


function LatestBlog(props) {
    const getNews=()=>{
        // document.write(props.rm)
        window.open(props.rm)
    
      }
  return (
    <div className='row'>
        <div className="col-lg-8">
            <img className='blogCardImg' src={props.img} alt="bg" />
        </div>
        <div className="col-lg-4">
            <div className="row">
                <div className="col-12">
                    <h1>{props.title}</h1>
                </div>
                <div className="col-12">
                    <p>{props.content}</p>
                </div>
                <div className="col-12">
            <button className='btn btn-primary text-center' onClick={getNews}>Read More</button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default LatestBlog