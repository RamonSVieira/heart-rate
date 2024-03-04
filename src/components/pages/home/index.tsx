import { useState, useEffect, useRef } from "react";
import Heart from "../../atoms/heart";
import Bpm from "../../atoms/bpm";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [bpm, setBpm] = useState(0);
  const clickTimes = useRef([]);

  function handleClick() {
    setIsClicked(true);
    const now = Date.now();
    clickTimes.current.push(now);

    clickTimes.current = clickTimes.current.filter(
      (time) => now - time <= 60000
    );

    const numClicks = clickTimes.current.length;
    if (numClicks > 1) {
      const interval =
        (clickTimes.current[numClicks - 1] - clickTimes.current[0]) /
        (numClicks - 1);
      setBpm(Math.round(60000 / interval));
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 50);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      clickTimes.current = clickTimes.current.filter(
        (time) => now - time <= 60000
      );

      if (clickTimes.current.length <= 1) {
        setBpm(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getBpmColorClass = (bpm: number) => {
    if (bpm > 120) return "bg-red-500";
    if (bpm > 100) return "bg-orange-500";
    if (bpm > 90) return "bg-yellow-500";
    if (bpm > 60) return "bg-green-500";
    return "text-black";
  };

  return (
    <div className="flex flex-col gap-10 items-center py-10">
      <p className="text-xl font-bold">Clique no coração repetidas vezes</p>

      <Heart
        className={`w-96 cursor-pointer ${isClicked ? "scale-110" : "scale-100"}
                    transition-transform duration-200 ease-out`}
        onClick={handleClick}
      />

      <Bpm num={bpm} className={getBpmColorClass(bpm)} />
    </div>
  );
};

export default Home;
