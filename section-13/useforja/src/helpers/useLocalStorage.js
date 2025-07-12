import { useEffect, useState } from "react";

export const useLocalStorage = (initialeState, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialeState; // parse because the type is string as we did JSON.stringify
  });

  // When delete movie from list, automatically removed here from the local storage as well
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
