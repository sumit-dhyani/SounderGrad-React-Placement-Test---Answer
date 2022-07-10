
import './App.css';
import Slides from './components/Slides';

function App({slides}) {
  return (
    <>
      <Slides data={slides} />
    </>
  );
}

export default App;
