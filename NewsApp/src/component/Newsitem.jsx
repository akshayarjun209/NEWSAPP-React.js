// import React, { Component } from 'react'

// export class Newsitem extends Component {

//   render() {
//     let{title, description, urlToImage ,url, author, publishedAt}=this.props;
//     return (
//      <div  className="container">

//        <div className="card" >
//           <img src={urlToImage?urlToImage:'https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-jh6owqqqx-1710885104770.jpg?quality=75&strip=all&1710871922&w=1024'} className="card-img-top" alt="..." />
//           <div className="card-body ">
//             {/* <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p> */}
//              <h5 className="card-title">{title?title.slice(0,45):""}...</h5>
//             <p className="card-text">{description?description.slice(0 ,88):""}...</p> 
//             <p className="card-text"><small className="text-body-secondary">{author?author:"Unknown"} - {new Date(publishedAt).toGMTString()}</small></p>
//             <div className= 'd-flex justify-content-center'>
//               <a href={url} className="btn btn-primary">Read More</a>
//             </div>
//           </div>   
//       </div>

      
//      </div>
//     )
//   }
// }

// export default Newsitem

// ---------------------------------convert into function Component-------------------------------

import React from 'react'

const Newsitem=(props)=>{

 
    let{title, description, urlToImage ,url, author, publishedAt}=props;
    return (
     <div  className="container">

       <div className="card" >
          <img src={urlToImage?urlToImage:'https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-jh6owqqqx-1710885104770.jpg?quality=75&strip=all&1710871922&w=1024'} className="card-img-top" alt="..." />
          <div className="card-body ">
            {/* <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p> */}
             <h5 className="card-title">{title?title.slice(0,45):""}...</h5>
            <p className="card-text">{description?description.slice(0 ,88):""}...</p> 
            <p className="card-text"><small className="text-body-secondary">{author?author:"Unknown"} - {new Date(publishedAt).toGMTString()}</small></p>
            <div className= 'd-flex justify-content-center'>
              <a href={url} className="btn btn-primary">Read More</a>
            </div>
          </div>   
      </div>

      
     </div>
    )
  
}

export default Newsitem