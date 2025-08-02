import { useMemo, useEffect } from "react";

// from https://codepen.io/sarazond/pen/LYGbwj
export const Stars = () => {
  // Inject CSS keyframes into document head
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes animStar {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-2000px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Generate random star positions
  const generateStars = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
    }));
  };

  const smallStars = useMemo(() => generateStars(700), []);
  const mediumStars = useMemo(() => generateStars(200), []);
  const bigStars = useMemo(() => generateStars(100), []);

  const createBoxShadow = (stars: { x: number; y: number }[]) => {
    return stars.map((star) => `${star.x}px ${star.y}px #FFF`).join(", ");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
        }}
      />

      {/* Small stars */}
      <div
        className="absolute animate-pulse"
        style={{
          width: "1px",
          height: "1px",
          background: "transparent",
          boxShadow: createBoxShadow(smallStars),
          animation: "animStar 50s linear infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "2000px",
          width: "1px",
          height: "1px",
          background: "transparent",
          boxShadow: createBoxShadow(smallStars),
          animation: "animStar 50s linear infinite",
        }}
      />

      {/* Medium stars */}
      <div
        className="absolute"
        style={{
          width: "2px",
          height: "2px",
          background: "transparent",
          boxShadow: createBoxShadow(mediumStars),
          animation: "animStar 100s linear infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "2000px",
          width: "2px",
          height: "2px",
          background: "transparent",
          boxShadow: createBoxShadow(mediumStars),
          animation: "animStar 100s linear infinite",
        }}
      />

      {/* Big stars */}
      <div
        className="absolute"
        style={{
          width: "3px",
          height: "3px",
          background: "transparent",
          boxShadow: createBoxShadow(bigStars),
          animation: "animStar 150s linear infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "2000px",
          width: "3px",
          height: "3px",
          background: "transparent",
          boxShadow: createBoxShadow(bigStars),
          animation: "animStar 150s linear infinite",
        }}
      />
    </div>
  );
};
