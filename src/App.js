import React from 'react';
import './App.css';
import { useState } from 'react';

import analyzeImageUrl from './azure-image-analysis';
function App() {

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  const handleButtonChange = (e) => {
    analyzeImageUrl(image);
  }

  return <div>
    <h1> Welcome to computer vision app </h1>
    <p>Insert Url to ananlize image or promp to generate an image</p>
    <input type="text" id='image' onChange={handleImageChange} value={image} placeholder="Url" />
    <button onClick={handleButtonChange}>ananlize</button><button>generate</button>
  </div>;
}

export default App;
