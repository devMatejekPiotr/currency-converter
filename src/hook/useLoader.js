import { useEffect, useState } from "react";

export const useLoader = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingId);
  }, []);

  return loading;
};
