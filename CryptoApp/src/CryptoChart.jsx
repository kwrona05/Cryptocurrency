/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = ({ id }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const result = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days: 7,
          },
        }
      );

      const prices = result.data.prices.map((price) => ({
        x: new Date(price[0]).toLocaleDateString(),
        y: price[1],
      }));

      setChartData({
        labels: prices.map((price) => price.x),
        datasets: [
          {
            label: `${id} Price in USD`,
            data: prices.map((price) => price.y),
            fill: false,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
          },
        ],
      });
    };
    fetchChartData();
  }, [id]);

  return <Line data={chartData} />;
};

export default CryptoChart;
