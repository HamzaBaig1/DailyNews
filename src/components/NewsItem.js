import React from 'react'

function NewsItem(props) {
    return (
        <div>


            <div className="card" style={{ height: "23rem" , backgroundColor:props.mode === "light"?"white":"#144272",color:props.mode==="light"?"black":"white" }}>
                <img src={props.imageUrl} className="card-img-top" style={{ height: "10rem" }} alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <a href={props.url} target="_blank" rel='noreferrer' className="btn btn-primary mt-auto">Read More</a>
                </div>
            </div>
        </div>


    )
}

export default NewsItem
