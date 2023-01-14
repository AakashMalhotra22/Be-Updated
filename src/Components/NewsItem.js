import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, dates, source } = this.props;
    return (
      <div>
        <div className="card">          
          <img src={imageUrl === null ? "https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2023/01/CeruleanwarblerAlwaysabirderWikimediaCommons_hero.jpg?fit=1024%2C682&ssl=1" : imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
              <span className="position-absolute top-0 start-900 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>
              {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary text-sm">By {author ? author : "Unknown"} on {new Date(dates).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
