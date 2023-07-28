import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useWatchLocation = (url) => {
  const location = useLocation();
  const [watchState, setWatchState] = useState(false);

  useEffect(() => {
    if (location.pathname === url) {
      setWatchState(true);
    } else {
      setWatchState(false);
    }
  }, [location.pathname, url]);

  return watchState;
};

export default useWatchLocation;
