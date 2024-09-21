import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CryptoList({ addToWatchList }) {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
      setCryptos(result.data);
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
      <ul>
        {crypto.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} (${crypto.current_price})
            <button onClick={() => handleAdd(crypto)}>Add to watchlist</button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}
export default CryptoList;
