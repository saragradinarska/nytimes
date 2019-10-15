import React from 'react';
import logo from './logo.svg'; 
import './App.css';


function App() {
    return (
      <div>
        <Article date="Jan. 30, 2018" title="New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon" paragraph="What's a 130-year-old company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck." image="https://bit.ly/32e9oFd" author="KEVIN ROOSE" />
        <Article date="Jan. 29, 2018" title="Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel" paragraph="Taiwan, pushing back over encroachment on Taiwan Strait airspace, ay leave thousands without flights home for the holiday." image="https://bit.ly/35uuh0O" author="CHRIS HORTON" />
        <Article date="Jan. 30, 2018" title="Kodak's Dubious Blockchain Gamble" paragraph="Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy." image="https://bit.ly/2MiP6EW" author="BRAD PLUMER" />
      </div>
  );
}

function Article(props) {
  return(
    <div className="container">
        <div className="article-date">
          <p>{props.date}</p>
        </div>
        <div className="article-content">
          <p >THE SHIFT</p>
          <h1>{props.title}</h1>

          <div>
            <p>{props.paragraph}</p>
          </div>
          <p className="one">By {props.author}</p>
        </div>
        <div className="article-image">
          <img src={props.image} width="342.22px" height="223.95px"/>
        </div>
      </div>
  )
  
}

export default App;
