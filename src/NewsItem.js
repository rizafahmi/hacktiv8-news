import React, {Component} from 'react'

class NewsItem extends Component {
  render() {
    return (
      <div>
        <div className="news-item">
          <div className="title">
          1. Mengapa Memilih Coding Bootcamp? <span className="domain">(hacktiv8.com/blog)</span>
          </div>
          <div className="meta">
            214 points by <span className="by">rizafahmi</span> 
            <span className="date">5 hours ago</span> |
            <span className="comment-count"> 54 comments</span>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
