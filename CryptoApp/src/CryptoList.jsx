/* eslint-disable react/prop-types */
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CryptoList({ addToWatchList }) {
  const [cryptos, setCryptos] = useState([]); // Default empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptos(result.data || []); // Ensure result.data is an array
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch cryptocurrency data", error);
        toast.error("Failed to fetch data. Please try again later.", error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (crypto) => {
    addToWatchList(crypto);
    toast.success(`${crypto.name} added to watchlist`);
  };

  return (
    <div>
      <h2>The most popular Cryptocurrencies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : cryptos && cryptos.length === 0 ? ( // Ensure cryptos is defined before accessing its length
        <p>No cryptocurrencies found</p>
      ) : (
        <ul>
          {(cryptos || []).map(
            (
              crypto // Use fallback empty array to prevent undefined issues
            ) => (
              <li key={crypto.id}>
                {crypto.name} (${crypto.current_price})
                <button onClick={() => handleAdd(crypto)}>
                  Add to watchlist
                </button>
              </li>
            )
          )}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}
CryptoList.propTypes = {
  addToWatchList: PropTypes.func.isRequired, // Ensure addToWatchList is a required function
};

export default CryptoList;
