import React from "react";
import Card from "./Card";
import {Cdata,Ddata,Edata,Fdata,Gdata} from "./Cdata";



//  const nCard = (val) => {
//   return(
//     <Card 
//     src={val.src}
//     />
//   )
// }
const nCard = (val, index) => {
  return (
    <Card
      key={index}
      src={val.src}
    />
  )
}


function App() {
  return (
    <>
      <section className="main-container">
        <div className="location" id="home">
          <h1 id="home">Popular on Netflix</h1>
          <div className="box">
         {/* {Cdata.map(nCard)}   */}
         {Cdata.map((item, index) => nCard(item, index))}
          </div>
        </div>
        <h1 id="myList">Trending Now</h1>
      <div className="box">
       {/* {Ddata.map(nCard)}                   */}
       
{Ddata.map((item, index) => nCard(item, index))}
      </div>
      <h1 id="tvShows">TV Shows</h1>
      <div className="box">
      {/* {Edata.map(nCard)}            */}
      {Edata.map((item, index) => nCard(item, index))}
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div className="box">
      {/* {Fdata.map(nCard)}                */}
      {Fdata.map((item, index) => nCard(item, index))}
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div className="box">
      {/* {Gdata.map(nCard)}                */}
      {Gdata.map((item, index) => nCard(item, index))}
      </div>
     
      </section>
    </>
  );
}

// {data.map((item, index) => (
//   <Card key={index} data={item} />
// ))}

// {data.map(item => (
//   <Card key={item.id} data={item} />
// ))}

export default App;
