import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import Service from './components/Service';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

    }, 1000);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode Activate", "Success!");
      // document.title = 'TextUtiles - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode Activate", "Success!");
      // document.title = 'TextUtiles - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element=
              {<TextForm showAlert={showAlert} heading="TextUtils - Word ,Character Couner, Remove extra spaces" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/service" element={<Service />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
