import { useRef, useEffect } from "react";

export default function Visualiser() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 50);
  }, []);

  class Bar {
    constructor() {}
    update() {}
    draw() {}
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return <canvas ref={canvasRef} className="bg-black" />;
  // const data = [10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10];
  // const barHeight = 50;

  // return (
  //   <svg width="500" height="300">
  //     {data.map((value, index) => (
  //       <rect
  //         key={index}
  //         x={index * 20}
  //         y={200 - barHeight}
  //         width="10"
  //         height={value}
  //         rx="5"
  //         ry="5"
  //         fill="black"
  //       />
  //     ))}
  //   </svg>
  // );
}
