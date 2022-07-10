import data from './Data.json'
import './App.css';
import Slides from './components/Slides';

function App() {
  return (
    <>
      <Slides data={data} />
    </>
  );
}

export default App;
