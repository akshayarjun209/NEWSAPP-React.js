// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'

    
// export class News extends Component {
//   static defaultProps = {
//     country:'in',
//     category: "general",

//   }
//   static propTypes = {
//     country: PropTypes.string,
//     category: PropTypes.string,
//   }

//   constructor(props){
//     super(props);

//     this.state ={

//       "article": [],
//       "totalResults": 0,
//       "pageNumber": 1,
//       "loading" : false

//     };
//     document.title=`${ this.capataliseString(this.props.category)}-News Monkey`;
//   }

//   capataliseString =(str)=>{ 
//     return str.charAt(0).toUpperCase()+ str.slice(1);

//   };

//   async update(){
//     this.props.setProgress(30);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNumber}&pageSize=9`;
    
//     this.setState({loading: true})
//     let data= await fetch(url);
//     let jsondata = await data.json();
//     this.props.setProgress(70);
//     this.setState({article:jsondata.articles, totalResults:jsondata.totalResults,  loading:false})
//     this.props.setProgress(100);
//   }

//    async componentDidMount(){
//     // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f51021d5b994babba84368f618b7967&page=1&pageSize=10";
    
//     // this.setState({loading: true})
//     // let data= await fetch(url);
//     // let jsondata = await data.json();

//     // this.setState({article :jsondata.articles, totalResults :jsondata.totalResults,  loading:false})
//     this.update()

//   }

//   handleNext = async()=>{
//     if(!( this.state.page+1 > Math.ceil(this.state.totalResults/9) ))
//    {
//       // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f51021d5b994babba84368f618b7967&page=${this.state.pageNumber +1 }&pageSize=10`;
//       // this.setState({loading: true})
//       // let data= await fetch(url);
//       // let jsondata = await data.json();
  
//       // this.setState({article :jsondata.articles, pageNumber:this.state.pageNumber+1, loading:false})
      
//       this.setState({ pageNumber: this.state.pageNumber + 1 }, () => {
       
//         this.update();
//       });
//       // this.setState({ pageNumber: this.state.pageNumber + 1});
//       // this.update()
//    }
//    }

  

//   handlePrevious = async()=>{

//     // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f51021d5b994babba84368f618b7967&page=${this.state.pageNumber -1 }&pageSize=10`;
//     // this.setState({loading: true})
//     //   let data= await fetch(url);
//     //   let jsondata = await data.json();
//     //   this.setState({article :jsondata.articles, pageNumber:this.state.pageNumber -1,  loading:false})
   
//     // this.setState({ pageNumber :this.state.pageNumber-1 });
//     // this.update()
//     if (this.state.pageNumber > 1) {
//       this.setState({ pageNumber: this.state.pageNumber - 1 }, () => {
//         this.update();
//       });
//     }
//   }

//   render() {

//     return (
//       <div className='container '>
//         <h1 className='text-center text-uppercase fw-bolder my-4 text-primary-emphasis'> News-Monkey-Headlines </h1>
//         <div className= 'd-flex justify-content-center'>
//         <div className="shadow p-3 mb-5 rounded  middle" style={{width: '18rem' }}>
//            <h4 className='text-center text-uppercase fw-bolder my-1 text-white '> {this.props.category} </h4>
//         </div>
//         </div>
//         {this.state.loading && <Spinner/> }
//         <div className='row my-4'>
//         {
        
//             !this.state.loading && this.state.article.map((ele) => (
//               ele.title === "[Removed]"? "" : 
//               <div className='col-md-4 my-4' key={ele.url}>
//                 <Newsitem
//                   title={ele.title}
//                   description={ele.description}
//                   urlToImage={ele.urlToImage}
//                   url={ele.url} 
//                   publishedAt={ele.publishedAt}
//                   author={ele.author}
//                 />
//               </div>
//             ))
//         }

// {/* 
//           {this.state.article.map((ele)=>{
//            return <div className='col-md-4 my-4' key={ele.url} >
//               <Newsitem  title = {ele.title} description={ele.description}  urlToImage={ele.urlToImage} url={ele.url}/>
//                    </div>
//                  }
//             )
//           } */}
         
//         </div>
//         <div className="d-flex justify-content-between my-4">
//               <button disabled={this.state.pageNumber<=1} type="button my-4" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous </button>
//               <button disabled={this.state.pageNumber+1 > Math.ceil(this.state.totalResults/20) } type="button my-4" className="btn btn-dark" onClick={this.handleNext}>Next Page {this.state.pageNumber+1} &rarr;</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default News


// ---------------------------------convert into function Component-------------------------------


import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

    
const News= (props)=> {
  
  const [article, setArticle] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  
  

 const capataliseString =(str)=>{ 
    return str.charAt(0).toUpperCase()+ str.slice(1);
  };

  const update=async()=>{
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=9`;
    
    setLoading(true)
    let data= await fetch(url);
    let jsondata = await data.json();

    props.setProgress(70);
    setArticle(jsondata.articles);
    setTotalResults(jsondata.totalResults)

    setLoading(false)
    props.setProgress(100);
  }
   

  useEffect( () => {
    
    document.title=`${capataliseString(props.category)}-News Monkey`;
    update();
  },[])
   
  const handleNext = async()=>{
    if(!( pageNumber+1 > Math.ceil(totalResults/9) ))
   {
    setPageNumber(pageNumber+1)
       
        update();
    };   
  }
  

  

  const handlePrevious = async()=>{

    if (pageNumber > 1) {
      setPageNumber(pageNumber-1)
       
        update();
      };
     
    
  }



  return (
      <div className='container '>
        <h1 className='text-center text-uppercase fw-bolder my-4 text-primary-emphasis'> News-Monkey-Headlines </h1>
        <div className= 'd-flex justify-content-center'>
        <div className="shadow p-3 mb-5 rounded  middle" style={{width: '18rem' }}>
           <h4 className='text-center text-uppercase fw-bolder my-1 text-white '> {props.category} </h4>
        </div>
        </div>
        {loading && <Spinner/> }
        <div className='row my-4'>
        {
        
            !loading && article.map((ele) => (
              ele.title === "[Removed]"? "" : 
              <div className='col-md-4 my-4' key={ele.url}>
                <Newsitem
                  title={ele.title}
                  description={ele.description}
                  urlToImage={ele.urlToImage}
                  url={ele.url} 
                  publishedAt={ele.publishedAt}
                  author={ele.author}
                />
              </div>
            ))
        }
    
        </div>
        <div className="d-flex justify-content-between my-4">
              <button disabled={pageNumber<=1} type="button my-4" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous </button>
              <button disabled={pageNumber + 1 > Math.ceil(totalResults/20) } type="button my-4" className="btn btn-dark" onClick={handleNext}>Next Page {pageNumber+1} &rarr;</button>
        </div>
      </div>
    )
 
}

export default News

News.defaultProps = {
  country:'in',
  category: "general",

}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
}