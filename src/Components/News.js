import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './spinner';
import propTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    country: 'in',
    pageSize: 9,
    category: 'general',
    apiKey: 'df36de1cc1124b98a6b9c7bb698d98e7'
  }

  static propTypes = {
      country: propTypes.string,
      pageSize: propTypes.number,
      category: propTypes.string
  }

  constructor()
  {
    super();
    this.state={
      article: [],
      loading: true,
      page: 1,
      totalArticles: 0
    }
  }

  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      article: parsedata.articles,
      totalArticles: parsedata.totalResults,
      loading:false
    });

  }
  
  handlePrev= async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        article: parsedata.articles,
        page: this.state.page-1,
        loading:false
      });
  }

  handleNext= async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
          article: parsedata.articles,
          page: this.state.page+1,
          loading:false
      });
      
  }




  render() {

    
    return (
      <div>
        <div className="container my-3">

          <h1 className="text-center">Top Headlines</h1>
          
          {this.state.loading && <Spinner/>}
          <div className="row my-5"> 
            {this.state.article.map((element)=>
            {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} 
                imageUrl={element.urlToImage} newsUrl={element.url} className="card-img-top"/>
              </div>
            })
            }
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev}className="btn btn-dark">&larr; previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)}onClick={this.handleNext}className="btn btn-dark">next &rarr;</button>
          </div>

        </div>
      </div>
    )
  }
}
