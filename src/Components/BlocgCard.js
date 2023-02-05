import React from 'react'
// import bg from '../img/android.jpg'
const BlocgCard = (props) => {
  const getNews=()=>{
    // document.write(props.rm)
    window.open(props.rm)

  }
  return (
    <div className="col-lg-4 col-md-6 col-12 "
    // onClick={(event) =>console.log(event)}
    >
{/* <a href={"/detail/" +props.blogid}> */}
      <div className="card mt-5 mx-2">
        <img src={props.img} className="card-img-top" alt="Image missing from api" />
        <div className="card-body row">
          <div className="col-12" >
            <h3 className="card-title ">
             {props.title}
             </h3>
          </div>
          <div className="col-12">
          <p className="card-text">
            {props.content}
          </p>
          </div>
          <div className="col-12">
            <button className='btn btn-outline-dark text-center mt-5' onClick={getNews}>Read More</button>
          </div>

        </div>
      </div>
      {/* </a> */}

    </div>

  )
}

export default BlocgCard