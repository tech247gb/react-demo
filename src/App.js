import './App.css';
import Appnavigator from './AppNavigator';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appnavigator/>
      </BrowserRouter>
    </div>
  );
}

export default App;
