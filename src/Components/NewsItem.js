import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description, imageUrl,newsUrl} = this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl===null ? "https://images.indianexpress.com/2023/01/ganga-vilas-1200-1.jpg": imageUrl} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a rel ="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
