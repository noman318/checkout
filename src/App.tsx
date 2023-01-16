import Home from './Component/Home';
import NavBars from './Component/NavBars';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
function App():JSX.Element{
  return (
  <>
  <Router>
    <NavBars/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
