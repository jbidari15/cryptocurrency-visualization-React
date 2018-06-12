import React from 'react';

const Coin= (props)=>{
    
      let item = props.item
        return(
            <div className="detail">
                <div className="item">
                <div className="name">{item.name}</div>
                <div>PRICE: {item.price_usd}</div>
                <div>RANK: {item.rank}</div>
                <div>PERCENT CHANGE IN ONE HOUR: {item.percent_change_1h}</div>
                </div>
                
        
            </div>
        )   
    }


export default Coin;