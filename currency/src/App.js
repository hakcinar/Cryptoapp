import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./Components/Coin";
function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false"; //son karar coingecko api ya geçtim coinmarketcapin içinden çıkamadım burada ilk 100 coin var
  const getData = async () => {
    const api = await fetch(url);
    const data = await api.json();
    setCoins(data);
  };
  return (
    <div className="App">
      {coins.map((coin)=>{
        return(
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            current={coin.current_price}
          />
        )
      })}
    </div>
  );
}

export default App;
