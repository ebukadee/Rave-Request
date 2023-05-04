
export default function Visualiser() {
  const data = [10, 20, 30, 40, 50]; 
  const barHeight = 50; 

  return (
    <svg width="500" height="300">
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * 20}
          y={200 - barHeight}
          width="10"
          height={barHeight}
          rx= "5"
          ry="5"
          fill="black"
        />
      ))}
    </svg>
  );
}
