import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/*
import { 
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom";
*/
function App() {

  const [mode , setMode] = useState ('light'); //Whether dark mode is enabled or not

  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#140e3d';
      showAlert("Dark mode has been enabled" , "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
    {/*}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      */}
    </>
  );
}

export default App;
