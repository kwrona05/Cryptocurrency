import CryptoChart from "./CryptoChart";
import PropTypes from "prop-types";
function WatchList({ watchList }) {
  return (
    <div>
      <h2>Watchlist</h2>
      {watchList.length === 0 ? (
        <p>No cryptocurrencies in your watchlist</p>
      ) : (
        watchList.map((crypto) => (
          <div key={crypto.id}>
            <h3>{crypto.name}</h3>
            <CryptoChart id={crypto.id} />
          </div>
        ))
      )}
    </div>
  );
}
WatchList.propTypes = {
  watchList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WatchList;
