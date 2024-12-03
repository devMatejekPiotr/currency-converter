import { useEffect, useState } from "react";
import { apiKey } from "../api";
import { CURRENCIES } from "../dataCurrency";
import CurrencyAPI from "@everapi/currencyapi-js";

export const useFetchData = () => {
  const [currencyData, setCurrencyData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const client = new CurrencyAPI(apiKey);

  useEffect(() => {
    const fetchApiId = setTimeout(() => {
      const fetchAPI = async () => {
        try {
          const date = await client.latest({
            base_currency: "PLN",
            currencies: CURRENCIES,
          });

          if (date.message) {
            throw new Error(date.message);
          }
          setCurrencyData((prev) => ({
            ...prev,
            data: date.meta,
            rates: date.data,
          }));
        } catch (e) {
          setErrorMessage(e.message);
        }
      };

      fetchAPI();
    }, 3000);

    return () => clearTimeout(fetchApiId);
  }, []);

  return {
    currencyData,
    errorMessage,
  };
};
