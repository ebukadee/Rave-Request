import { useRef, useEffect } from "react";

export default function Visualiser() {
  const canvasRef = useRef(null);
  class Bar {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    update(micInput) {
      // this.height = micInput
      this.x++
    }
    draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  const bar1 = new Bar(10, 10, 100, 200, "blue");


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bar1.update()

      bar1.draw(ctx);
      // console.log(bar1);
      requestAnimationFrame(animate);
    }
    animate();
  }, [bar1]);

  return <canvas ref={canvasRef} />;

  // const canvasRef = useRef(null);

  // function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }

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
