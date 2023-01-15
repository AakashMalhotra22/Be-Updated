import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  static defaultProps = {
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

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-Be Updated`;
  }

  async updated() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({
      article: parsedata.articles,
      totalArticles: parsedata.totalResults,
      loading: false,
      page:2
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updated();
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetcher = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();    
    this.setState({
      article: this.state.article.concat(parsedata.articles),
      totalArticles: parsedata.totalResults,
      loading: false
    });
  }


  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.fetcher();
  };


  render() {

    return (
      <div>
        <h1 className="text-center my-3">{`Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`}</h1>

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length <this.state.totalArticles}
          loader={<Spinner />}
        >
          
          <div className="container">
            
            {this.state.loading && <Spinner />}
            <div className="row my-5">
              {this.state.article.map((element,index) => {
                return <div className="col-md-4" key={index+element.url}>
                  <NewsItem title={element.title} description={element.description}
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} dates={element.publishedAt} source={element.source.name} className="card-img-top" />
                </div>
              })
              }
            </div>
            
          </div>
        </InfiniteScroll>

      </div>
    )
  }
}
