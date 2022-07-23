import logo from './logo.svg';
import './App.css';
import {MaxMultiplier} from './maxMultiplier'
import {TeamWeight} from './totalWeight'
import InputShortener from './shortenLink'

function App() {
  return (
    <div className="App">
      <MaxMultiplier />
      <TeamWeight />
      <InputShortener />
    </div>
  );
}

export default App;
