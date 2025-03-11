import { useEffect, useState } from "react";
import styles from "./AnimatedBgStyles.module.css";

const NUM_STARS = 50;

const AnimatedBg = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: NUM_STARS }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1, // Размер звезд (1px - 5px)
      startX: `${Math.random() * 100}vw`, // Начальная X-координата (случайно)
      startY: `${Math.random() * 100}vh`, // Начальная Y-координата
      endX: `${Math.random() * 100 - 50}vw`, // Конечная X-координата (эффект глубины)
      endY: `${Math.random() * 100 - 50}vh`, // Конечная Y-координата
      duration: Math.random() * 5 + 3, // Длительность анимации (3-8 секунд)
    }));

    setStars(newStars);
  }, []);

  return (
    <div className={styles.animated_bg}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.particle}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--start-x": star.startX,
            "--start-y": star.startY,
            "--end-x": star.endX,
            "--end-y": star.endY,
            "--start-size": `${star.size / 2}`,
            "--end-size": `${star.size * 2}`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBg;
