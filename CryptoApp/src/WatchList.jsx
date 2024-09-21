import CryptoChart from "./CryptoChart";
function WatchList({ watchlist }) {
  return (
    <div>
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No cryptocurrencies in your watchlist</p>
      ) : (
        watchlist.map((crypto) => (
          <div key={crypto.id}>
            <h3>{crypto.name}</h3>
            <CryptoChart id={crypto.id} />
          </div>
        ))
      )}
    </div>
  );
}
export default WatchList;
