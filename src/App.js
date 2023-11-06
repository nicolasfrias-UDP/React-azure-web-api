import React from 'react';
import { useState } from 'react';

import analyzeImageUrl from './azure-image-analysis';
import generateImage from './azure-image-generation';

function App() {

  const [image, setImage] = useState('');

  const [result, setResult] = useState(null);

  //console.log(result)



  const handleImageChange = (e) => {
    setImage(e.target.value);
  }

  const handleclickanalyze = async (e) => {
    let result_async = await analyzeImageUrl(image);
    setResult(JSON.stringify(result_async, null, 2));
    //console.log(result)
  }

  const handleclickgenerate = async (e) => {
    let result_async = await generateImage(image);
    setResult(JSON.stringify(result_async, null, 2));
    //console.log('hola', result_async[0].url)
    setImage(result_async[0].url);
  }



  return <div>
    <h1> Welcome to computer vision app </h1>
    <p>Insert Url to ananlize image or promp to generate an image</p>
    <input type="text" id='image' onChange={handleImageChange} value={image} placeholder="Url" />
    <button onClick={handleclickanalyze}>ananlize</button><button onClick={handleclickgenerate}>generate</button>
    <div>{image === '' ?
      (
        <p>Cargando imagen...</p>
      ) : (
        <img src={image} alt='imagen' style={{ width: 300, height: 300 }} />
      )}

    </div>
    <div>{result === null ?
      (
        <p>Cargando el resultado...</p>
      ) : (
        <pre>{result}</pre>
      )}</div>
  </div>;
}

export default App;
