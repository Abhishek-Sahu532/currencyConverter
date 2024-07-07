import { useEffect, useState } from "react";

function useCurrencyInfo(currency = 'usd') {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => { return  setData(res[currency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData(null);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
