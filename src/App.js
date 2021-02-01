import Counter from './Counter';
import Counter2 from './Counter2';
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter2 />
    </RecoilRoot>
  );
}

export default App;
