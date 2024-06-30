import Counter from './components/counter';
import './App.css';
import { CounterContext } from './components/context/counter';
import { useContext } from 'react';

function App() {
  const counterState = useContext(CounterContext)
  console.log(counterState)
  return (
    <div className="App">
      <h1>Context API Example</h1>
      <h1>Count: {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
