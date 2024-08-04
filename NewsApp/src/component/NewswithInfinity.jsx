// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";


// export class NewswithInfinity extends Component {

//     static defaultProps = {
//         country:'in',
//         category: "general",
    
//       }
//       static propTypes = {
//         country: PropTypes.string,
//         category: PropTypes.string,
//       }
    
//       constructor(props){
//         super(props);
    
//         this.state ={
    
//           "article": [],
//           "totalResults": 0,
//           "pageNumber": 1,
//           "loading" : false
//         };
//         document.title=`${ this.capataliseString(this.props.category)}-News Monkey`;
//       }
    

//     capataliseString =(str)=>{ 
//         return str.charAt(0).toUpperCase()+ str.slice(1)
    
//      };

//       async update(){
//         this.props.setProgress(30);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNumber}&pageSize=9`;
        
//         this.setState({loading: true})
//         let data= await fetch(url);
//         let jsondata = await data.json();
//         this.props.setProgress(70);
//         this.setState({article:jsondata.articles, totalResults:jsondata.totalResults ,loading:false})
//         this.props.setProgress(100);
//       }
    
//        async componentDidMount(){
//            this.update()
    
//       }
    
//         fetchMoreData = async() => {
//             this.setState({pageNumber:this.state.pageNumber+1})
            
//             const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f51021d5b994babba84368f618b7967&page=${this.state.pageNumber}&pageSize=9`;
        
           
//             let data= await fetch(url);
//             let jsondata = await data.json();
        
//             this.setState({article:this.state.article.concat(jsondata.articles), totalResults:jsondata.totalResults })
        
//         };

//   render() {

//     return (
//     <>
        
//         <h1 className='text-center text-uppercase fw-bolder my-4 text-primary-emphasis'> News-Monkey-Headlines </h1>
//         <div className= 'd-flex justify-content-center'>
//         <div className="shadow p-3 mb-5 rounded  middle" style={{width: '18rem' }}>
//            <h4 className='text-center text-uppercase fw-bolder my-1 text-white '> {this.props.category} </h4>
//         </div>
//         </div>
//         {this.state.loading && <Spinner/> }

//         <InfiniteScroll
//           dataLength={this.state.article.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.article.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//         <div className='container '>
//           <div className='row my-4'>
//             {
//                 !this.state.loading && this.state.article.map((ele) => (
//                     ele.title === "[Removed]"? "" : 
//                     <div className='col-md-4 my-4' key={ele.url}>
//                         <Newsitem
//                         title={ele.title}
//                         description={ele.description}
//                         urlToImage={ele.urlToImage}
//                         url={ele.url} 
//                         publishedAt={ele.publishedAt}
//                         author={ele.author}
//                         />
//                     </div>
//                 ))
//             }
//            </div> 
//         </div>
//         </InfiniteScroll>
            
//     </>
//     )
//   }
// }

// export default NewswithInfinity

// ---------------------------------convert into function Component-------------------------------

