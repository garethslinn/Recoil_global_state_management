import React from "react";
import { useRecoilState, atom } from 'recoil';

const count = atom({
  key: "count",
  default: 0
});

export const Counter2 = () => {
  const [countState, setCount] = useRecoilState(count);
  return (
    <div>
      <h1>{countState}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increase count</button>
    </div>
  );
}

export default Counter2;