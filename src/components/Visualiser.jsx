export default function Visualiser() {
  const data = [10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10];
  const barHeight = 50;

  return (
    <svg
      width="500"
      height="300"
      style={{ display: "flex", alignItems: "center" }}
    >
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * 20}
          y={200 - barHeight}
          width="10"
          height={value}
          rx="5"
          ry="5"
          fill="black"
        />
      ))}
    </svg>
  );
}
