import { useState } from "react";
import CryptoList from "./CryptoList";
import WatchList from "./WatchList";
import "./Crypto.css";

function CryptoTracker() {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (crypto) => {
    if (!watchList.includes(crypto)) {
      setWatchList([...watchList, crypto]);
    }
  };

  return (
  <div className="container">
    <h1>Cryptocurrency Tracker</h1>
    <CryptoList addToWatchList={addToWatchList} />
    <WatchList watchList={watchList} />
  </div>;
  )
}
export default CryptoTracker;
