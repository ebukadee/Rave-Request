import { useRef, useEffect } from "react";

export default function Visualiser() {
  const canvasRef = useRef(null);
  class Microphone {
    constructor() {
      this.initialized = false;
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(
          function (stream) {
            this.audioContext = new AudioContext();
            this.microphone = this.audioContext.createMediaStreamSource(stream);
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            this.microphone.connect(this.analyser);
            this.initialized = true;
          }.bind(this)
        )
        .catch((err) => {
          console.log(err);
        });
    }
    getSamples() {
      this.analyser.getByteTimeDomainData(this.dataArray);
      let normSamples = [...this.dataArray].map((e) => e / 128 - 1);
      return normSamples;
    }
    getVolume() {
      this.analyser.getByteTimeDomainData(this.dataArray);
      let normSamples = [...this.dataArray].map((e) => e / 128 - 1);
      let sum = 0;
      for (let i = 0; i < normSamples.length; i++) {
        sum += normSamples[i] * normSamples[i];
      }
      let volume = Math.sqrt(sum / normSamples.length);
      return volume;
    }
  }

  class Bar {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    update(micInput) {
      this.height = micInput * 500;
    }
    draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const microphone = new Microphone();
  let bars = [];
  let barWidth = window.innerWidth / 128;
  function createBars() {
    for (let i = 0; i < 128; i++) {
      bars.push(new Bar(i * barWidth, window.innerHeight / 2, 4, 20, "black"));
    }
  }
  createBars();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 500;
    function animate() {
      if (microphone.initialized) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const samples = microphone.getSamples();
        // const volume = microphone.getVolume()
        bars.forEach((bar, i) => {
          bar.update(samples[i]);
          bar.draw(ctx);
        });
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, [bars]);

  return (
    <canvas ref={canvasRef} className="flex justify-center items-center" />
  );

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
