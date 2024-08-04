// import React, { Component } from 'react'
// import Load6 from './Load6.gif'


// export class Spinner extends Component {
//   render() {
//     return (
//         <div className="text-center">
//             <img className="my-3" src={Load6} alt="loading" />
            
//         </div>

//     )
//   }
// }

// export default Spinner


// ---------------------------------convert into function Component-------------------------------



import React from 'react'
import Load6 from './Load6.gif'


const Spinner=()=>{
 
    return (
        <div className="text-center">
            <img className="my-3" src={Load6} alt="loading" />   
        </div>
    )
}

export default Spinner