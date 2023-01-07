import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Headers from './components/Headers';
import { HomeScreen } from './Screens/HomeScreen';
import Events from './Screens/Events';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

function App() {
  return (
    <>
      <section>
        <Router>
      <Headers />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/events' element={<Events />} />
            <Route path='/registration' element={<RegistrationScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
