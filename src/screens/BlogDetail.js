import React, { Component } from 'react'
import bg from '../img/android.jpg'
// import axios from 'axios'
export class BlogDetail extends Component {
  constructor(){
    super();
    this.state={
      x:"My State Property",
    };
  }

// Axios syntax
//   test=()=>{
//     //There are 4 methods which use for every request:
//     // GET => Fetch Data From API
//     //POST => To give data to API
//     //PATCH => To change the already existing data 
//     //PUT => Either give the data or change the alreay existing data
//     //DELETE => Delete the data
// //then is a callback function execute when api returns data either it will execute catch callback function

//     axios.get('url').then().catch()
//   }


  render() {
    return (
      <div className='container mx-auto mt-5'>
        <div className="row">
            <div className="col-12 text-center">
                <h1 className='detailHeader'>
                {this.state.x}
                </h1>

            </div>
            <div className="col-12 text-center">
                <img className="detailImg" src={bg} alt="android" />
            </div>
            <div className="col-12">
                <p className='detailParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vitae, explicabo officiis voluptatibus veritatis impedit non officia modi et in labore quia hic, molestias natus at. Maiores recusandae numquam explicabo!</p>
            </div>
        </div>

      </div>
    )
  }
}

export default BlogDetail