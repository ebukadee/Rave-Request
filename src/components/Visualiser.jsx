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
  let barWidth = 1000 / 128;
  function createBars() {
    for (let i = 0; i < 128; i++) {
      bars.push(new Bar(i * barWidth, 400 / 2, 2, 20, "black"));
    }
  }
  createBars();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");   
    function animate() {
      if (microphone.initialized) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const samples = microphone.getSamples();
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
    <canvas ref={canvasRef} width={500} height={400} />
  );
}
