import logo from './logo.svg';
import './App.css';
import { Icon } from '@iconify/react';
import { useState } from "react";
import Reader from "./Pages/Reader"
import Library from "./Pages/Library"
import ErrorPage from "./Pages/ErrorPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const theming = {
    'dark': {'primary': '#F46036', 'secondary': '#2E294E', 'error': '#E71D36', 'sucess': '#1B998B',
            'info': '#C5D86D', 'background': '#262626', 'text': '#fff'},
    'light': {'primary': '#FBC1B1', 'secondary': '#C0BCDC', 'error': '#F5A3AB', 'sucess': '#74E7D9',
            'info': '#DFEAAE', 'background': '#FBFBFB', 'text': '#000'}
  };
  const [theme, setTheme] = useState(theming['dark']);
  const swapTheme = () => {
    if(theme['text'] == '#000')
    {
      document.getElementById('background').style.backgroundColor='#262626';
      document.getElementById('theme').innerHTML = '☀';
      setTheme(theming['dark']);
    }
    else
    {
      document.getElementById('background').style.backgroundColor='#FBFBFB';
      document.getElementById('theme').innerHTML = '⏾';
      setTheme(theming['light']);
    }
  }

  return (
    <Router>
      <button onClick={swapTheme} className='floating-panel' id="theme" style={{'backgroundColor': theme['primary'], 'color': theme['text'], 'fontSize': '16pt'}}>☀</button>

      <Routes>
        <Route path="/" element={Library(theme)}/>
        <Route path="/reader" element={Reader(theme)}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
