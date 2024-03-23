import { useState } from "react";
import data from "./data/data";
import "./App.css";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const handlePrev = () => {
    let newPrevReview = currentCard - 1;
    displayCard(newPrevReview);
  };
  const handleNext = () => {
    let newNextReview = currentCard + 1;
    displayCard(newNextReview);
  };
  const handleRandom = () => {
    let randomReview = Math.floor(Math.random() * data.length);
    if (randomReview === currentCard) return handleNext();
    return setCurrentCard((c) => randomReview);
  };
  const displayCard = (ind) => {
    if (ind > data.length - 1) return setCurrentCard((c) => 0);
    if (ind < 0) return setCurrentCard((c) => data.length - 1);
    return setCurrentCard((c) => ind);
  };
  return (
    <>
      <div className="title">
        <h1>Our Reviews</h1>
        <div id="underline"></div>
      </div>
      <div className="mainContainer">
        <div className="imageContainer">
          <i className="fas fa-quote-right"></i>
          <img src={data[currentCard].image} alt={data[currentCard].name} />
        </div>
        <h3 id="customerName">{data[currentCard].name}</h3>
        <h3 id="customerRole">{data[currentCard].role}</h3>
        <p id="customerReview">{data[currentCard].review}</p>
        <div className="btnContainer">
          <button onClick={() => handlePrev()} id="previousBtn">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => handleNext()} id="nextBtn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <button onClick={() => handleRandom()} id="randomBtn">
          Random
        </button>
      </div>
    </>
  );
}

export default App;
