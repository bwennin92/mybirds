
import './App.css';
import Birds from './components/Birds';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
<Suspense fallback = {<h1>LOAdiNg</h1>}><Birds/></Suspense>
    </div>
  );
}

export default App;
