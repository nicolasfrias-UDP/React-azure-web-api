import React from 'react';

function App() {
  const value = 'World';
  return <div>
    <h1> Welcome to computer vision app </h1>
    <p>Insert Url to ananlize image or promp to generate an image</p>
    <input type="text" placeholder="Url" />
    <buttion>ananlize</buttion><button>generate</button>
  </div>;
}

export default App;
