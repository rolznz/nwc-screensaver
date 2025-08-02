import { useMemo } from "react";

// from https://codepen.io/mikegolus/pen/Jegvym
export const Fireflies = ({
  quantity = 15,
  backgroundImage = "https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg",
}) => {
  const fireflies = useMemo(() => {
    const generateKeyframes = () => {
      const steps = Math.floor(Math.random() * 12) + 16;
      const rotationSpeed = Math.floor(Math.random() * 10) + 8;

      let keyframes = "";
      for (let step = 0; step <= steps; step++) {
        const percentage = (step * (100 / steps)).toFixed(2);
        const translateX = Math.random() * 100 - 50;
        const translateY = Math.random() * 100 - 50;
        const scale = Math.random() * 0.75 + 0.25;

        keyframes += `
          ${percentage}% {
            transform: translateX(${translateX}vw) translateY(${translateY}vh) scale(${scale});
          }
        `;
      }

      return {
        keyframes,
        rotationSpeed,
        flashDelay: Math.random() * 8000 + 500,
        flashDuration: Math.random() * 6000 + 5000,
      };
    };

    return Array.from({ length: quantity }, (_, i) => ({
      id: i,
      ...generateKeyframes(),
    }));
  }, [quantity]);

  const generateStyles = () => {
    let styles = `
      @keyframes drift {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes flash {
        0%, 30%, 100% {
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
        }
        5% {
          opacity: 1;
          box-shadow: 0 0 2vw 0.4vw yellow;
        }
      }
    `;

    fireflies.forEach((firefly) => {
      styles += `
        @keyframes move${firefly.id} {
          ${firefly.keyframes}
        }
      `;
    });

    return styles;
  };

  return (
    <div className="firefly-container">
      <style>{generateStyles()}</style>

      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="firefly"
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            width: "0.4vw",
            height: "0.4vw",
            margin: "-0.2vw 0 0 9.8vw",
            animation: `move${firefly.id} ease 200s alternate infinite`,
            pointerEvents: "none",
          }}
        >
          <div
            className="firefly-before"
            style={{
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              transformOrigin: "-10vw",
              background: "black",
              opacity: 0.4,
              animation: `drift ease ${firefly.rotationSpeed}s alternate infinite`,
            }}
          />
          <div
            className="firefly-after"
            style={{
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              transformOrigin: "-10vw",
              background: "white",
              opacity: 0,
              boxShadow: "0 0 0vw 0vw yellow",
              animation: `drift ease ${firefly.rotationSpeed}s alternate infinite, flash ease ${firefly.flashDuration}ms infinite`,
              animationDelay: `0ms, ${firefly.flashDelay}ms`,
            }}
          />
        </div>
      ))}

      <style>{`
        .firefly-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(${backgroundImage});
          background-size: cover;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};
