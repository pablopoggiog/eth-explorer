import { useEffect, useState } from "react";
import { UseBlockDate } from "src/types";

export const useBlockDate: UseBlockDate = (timestamp) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeAgo, setTimeAgo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const time = new Date(timestamp * 1000);
    console.log({ currentTime });
    const result = Math.round((currentTime.getTime() - time.getTime()) / 1000);
    setTimeAgo(result);
  }, [timeAgo, timestamp, currentTime]);

  const getBlockDate = () => {
    const date = String(new Date(timestamp * 1000));

    return date;
  };

  return {
    timeAgo,
    getBlockDate,
  };
};
