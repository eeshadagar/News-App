import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page: 1
        }
    }
    
    static propTypes ={
        country : PropTypes.string,
        category : PropTypes.string,
    }
    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b6081abdd6a4a19bd8f64275f6c084d&page=${this.state.page}&pageSize=6`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    }
    async componentDidMount(){
        this.updateNews();
    }

    handlePrevclick = async () => {
        this.setState({
            page: this.state.page - 1,
        });
        this.updateNews();
    }

    handleNextclick = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        this.updateNews();
    }
    

  render() {
    return (
        <>
            <div className="container my-3">
                <h1><center>Top Headlines</center></h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                                </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevclick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/6)} className="btn btn-primary" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
  }
}

export default News