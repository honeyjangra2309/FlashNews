import React, { Component } from 'react'
import NewsItem from './NewsItem'
import loading from '../loading.gif'

export class News extends Component {
  
  constructor() {
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
   capitalizeFirstLetter =(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  handlePrevClick = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=87e0601e42b24a9f9a3550b2c60e197d&pageSize=${this.props.pageSize}&page=${this.state.page-1}&category=${this.props.category}`;
    this.setState({
      loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:true
  })
  }
  handleNextClick =async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=87e0601e42b24a9f9a3550b2c60e197d&pageSize=${this.props.pageSize}&page=${this.state.page+1}&category=${this.props.category}`;
    this.setState({
      loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
    loading:false
  })
  }
 async componentDidMount() {
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=87e0601e42b24a9f9a3550b2c60e197d&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
    this.setState({
      loading:true
    })
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,loading:false});
  }
  render() {
    return (
      <div className='container my-3'>
          <h2 className='text-center'>FlashNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {this.state.loading && <img src={loading} alt="" />}
         <div className="row">
           {!this.state.loading && this.state.articles.map((element) => {
             return <div className="col-md-4 col-sm-6" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage}
              newsURL={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
             </div>
           })}
         </div>
         <div className="container d-flex justify-content-between">
           <button disabled={this.state.page<=1}className='btn btn-dark' type='button' onClick={this.handlePrevClick}>&larr; Previous</button>
           <button disabled={this.state.page+1>this.state.totalResults/this.props.pageSize}className='btn btn-dark' type='button' onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News