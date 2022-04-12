import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
 /* let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=7e0b9fcb-4333-44f2-889a-f8d3ddb2e57a';//burda no cors verince olmuştu api key missing vermişti
  useEffect(() => {
    getData();
  },[])
 const getData = async () =>{
    let options = {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        
       },
      mode:'no-cors',
    };
    const api = await fetch(url,options);
    const data = await api.json();
    console.log(data)
  }*/
  
  let response = null;
new Promise(async (resolve, reject) => {//axiosla denedik yinede olmadı cors hatası veriyor sürekli şu anlık çözemedim headerda no-cors göndermeme rağmen
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
		  mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
			   Accept: 'application/json',
			  'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': '7e0b9fcb-4333-44f2-889a-f8d3ddb2e57a',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});
  return (
    <div className="App" id='App'>

    </div>
  );
}

export default App;

