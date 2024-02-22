import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {



    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [Totalresult, SetTotalResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const updateNews = async () => {

        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=dbf6425bcd7d4e0db99cc9cbbd014796&page=${page}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        SetTotalResult(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)

    }

    useEffect(() => {
        document.title=`${props.category} - NewsMonkey`
        updateNews()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=dbf6425bcd7d4e0db99cc9cbbd014796&page=${page+1}`
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        SetTotalResult(parsedData.totalResults)
    }
    return (
        <div>
            <div className="container">
                <h1 style={{ color: props.mode === "light" ? "black" : "white" }} className="mt-4 text-center">Daily News -Top {props.category} Headlines</h1>
                        {loading && <Spinner/>}
                        <InfiniteScroll
                            dataLength={articles.length}
                            next={fetchMoreData}
                            hasMore={articles.length < Totalresult}
                            loader={<Spinner/>}>
                <div className="container my-5">
                    <div className="row gy-3">

                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>

                                <NewsItem mode={props.mode} title={element.title === null ? "" : element.title.slice(0, 45)} description={element.description === null ? "Click Read More for Details" : element.description.slice(0, 88)} imageUrl={element.urlToImage === null ? "https://media.cnn.com/api/v1/images/stellar/prod/230106222407-japan-bomb-threat-0107.jpg?c=16x9&q=w_800,c_fill" : element.urlToImage} url={element.url} />

                            </div>

                        })}
                        

                    </div>
                </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default News
