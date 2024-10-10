import { useEffect, useState } from 'react';

function useCurrencyInfo(currecy) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currecy}.json`)
    .then((res) => res.json())
    .then((response) => setData(response[currecy]))
    .catch((error) => console.error('Error:', error));
  }, [currecy]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
