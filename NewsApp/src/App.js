// import React, { Component } from 'react'
// import './App.css';
// import Navbar from './component/Navbar';
// import News from './component/News';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NewswithInfinity from './component/NewswithInfinity';
// import LoadingBar from 'react-top-loading-bar'

// export class App extends Component {
//  //apiKey="9f51021d5b994babba84368f618b7967"
//   apiKey=process.env.REACT_APP_APIKEY
  

//   state={
//     progress:0
//   }

//   setProgress=(progress)=>{
//     this.setState({progress : progress})
//   };
  
//   render() {
//   return (

// <BrowserRouter>
//      <Navbar/>
//      <LoadingBar
//         color='#ff1946'
//         progress={this.state.progress}
      
//       />
//       <Routes>
     
//            <Route exact path='/' element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="general" category="general"/>} ></Route>
//            <Route exact path='/business'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="business" category="business"/>}></Route>
//            <Route exact path='/entertainment'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="entertainment" category="entertainment"/>}></Route>
//            {/* <Route exact path='/general'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="general" category="general"/>}></Route> */}
//            <Route exact path='/health'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="health" category="health"/>}></Route>
//            <Route exact path='/science'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="science" category="science"/>}></Route>
//            <Route exact path='/sports'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="sports" category="sports"/>}></Route>
//            <Route exact path='/technology'element={<News country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="technology" category="technology"/>}></Route> 
//            <Route exact path='/infinitescroll' element={<NewswithInfinity country="in" setProgress={this.setProgress} apiKey={this.apiKey} key ="general" category="general"/>} ></Route>
//       </Routes>
      
//     </BrowserRouter>
      


//   );
// }
// }

// export default App;


// ---------------------------------convert into function Component-------------------------------

import React, {useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
 
  const apiKey=process.env.REACT_APP_APIKEY
  
  const[ progress, setProgress]= useState(0)
   
  return (

<BrowserRouter>
     <Navbar/>
     <LoadingBar
        color='#ff1946'
        progress={progress}
      
      />
      <Routes>
     
           <Route exact path='/' element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="general" category="general"/>} ></Route>
           <Route exact path='/business'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="business" category="business"/>}></Route>
           <Route exact path='/entertainment'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="entertainment" category="entertainment"/>}></Route>
           {/* <Route exact path='/general'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="general" category="general"/>}></Route> */}
           <Route exact path='/health'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="health" category="health"/>}></Route>
           <Route exact path='/science'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="science" category="science"/>}></Route>
           <Route exact path='/sports'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="sports" category="sports"/>}></Route>
           <Route exact path='/technology'element={<News country="in" setProgress={setProgress} apiKey={apiKey} key ="technology" category="technology"/>}></Route> 
           {/* <Route exact path='/infinitescroll' element={<NewswithInfinity country="in" setProgress={setProgress} apiKey={apiKey} key ="general" category="general"/>} ></Route> */}
      </Routes>
      
    </BrowserRouter>
 
  );

}

export default App;
