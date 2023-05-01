import React, { useRef } from 'react';

function MyComponent() {
  const pathRef = useRef(null);

  function updatePath() {
    const path = pathRef.current;

    const x1 = 500;
    const y1 = 100;
    const x2 = 500;
    const y2 = 200;

    path.setAttribute('d', `M${x1} ${y1} L${x2} ${y2}`);
  }

  return (
    <svg>
      <path ref={pathRef} d="M980.878 239.383L980.878 157.783" />
      <button onClick={updatePath}>Update Path</button>
    </svg>
  );
}