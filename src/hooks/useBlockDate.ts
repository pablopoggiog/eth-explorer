import { useEffect, useState } from "react";

export const useBlockDate = (timestamp: number) => {
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
    const result = Math.round((currentTime.getTime() - time.getTime()) / 1000);
    console.log({ timestamp, time, timeAgo });
    setTimeAgo(result);
  }, [timeAgo, timestamp, currentTime]);

  const getBlockDate = () => {
    const date = new Date(timestamp * 1000);

    return date;
  };

  return {
    timeAgo,
    getBlockDate,
  };
};
