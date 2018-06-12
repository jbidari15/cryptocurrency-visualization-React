import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './coin';
import Sort from './sort';
//import Search from './search';


class App extends Component {
  constructor(props){
    super(props)
    this.state={data:[]};
}
 
  componentDidMount(){
    this.myData();
    // this.interval = setInterval(() => this.myData(), 60 * 1000);
  }
myData(){
  const url ="https://api.coinmarketcap.com/v1/ticker/?limit=20";
  axios.get(url)
  .then(response=>{
    this.setState({data:response.data, filteredData:response.data});
  })
}
// myData(){
//   const url ="https://api.coinmarketcap.com/v1/ticker/?limit=20";
//   fetch(url)
//   .then((response)=> {
//   return response.json();
// })
//   .then((myJson)=> {
//   this.setState({data:myJson});
// });
// }
sortName=()=>{
  //let givenArray=[...this.state.data];
  let sortedArray= this.state.data.sort(function(a,b){
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
  })
  this.setState({data:sortedArray});
}
sortPrice=()=>{
  let sortedArray = this.state.data.sort(function(a,b){
    return a.price_usd-b.price_usd;
  })
  this.setState({data:sortedArray});
}

sortRank=()=>{
  let sortedArray = this.state.data.sort(function(a,b){
    return a.rank-b.rank;
  })

  this.setState({data:sortedArray});
}
search=(e)=>{
  let foundItems= this.state.filteredData.filter(function(item){
       return item.name.toLowerCase().includes(e.target.value);
   })

  console.log('foundItems', foundItems)
  this.setState({data:foundItems});
  
}

render() {
   let AllItems = this.state.data.map((item,i)=>{
    return <Coin key={i} item={item}/>
  })
    return (
      <div className="container">
          <h1>CRYPTOCURRENCY VIEWER</h1>
               <div className="buttons">
                  <input type="text" onChange={this.search}/>
                 <Sort button={<button onClick={this.sortName}>SortByName</button>}/>
                  <Sort button={<button onClick={this.sortPrice}>SortByPrice</button>}/>
                 <Sort button={<button onClick={this.sortRank}>SortByRank</button>}/>
               </div>
            
           <div className="items">
                  {AllItems}
           </div>
      </div>
     
   
    );
  }
}

export default App;
