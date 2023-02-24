import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props
    return (
      <>
        <div className="my-3">
            <div className="card" >
                <img className="card-img-top" alt="" src={!imageUrl?"https://press.nbcnews.com/wp-content/uploads/2021/02/NBC-News-Dig-Banner-1.png":imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Newsitem