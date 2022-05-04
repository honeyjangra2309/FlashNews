import React from 'react'

export default function NewsItem(props) {
    
  return (
      <div className="my-3">
       <div className="card">
        <div style={{display:"flex",position:"absolute",right:"0",justifyContent:"flex-end"}}>
        <span className="badge badge-info">{props.source}</span>
        </div>
            <img src={!props.imageURL?"https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/05/Extraordinary-ICOs-in-Crypto-History-Ethereum-ETH-Tezos-XTZ-FIREPIN-Token-FRPN-817x404_c-1-817x404_c.jpg": props.imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">by {!props.author? "Unknown": props.author} on {new Date(props.time).toGMTString()}</small></p>
                <a href={props.newsURL} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
  )
}
