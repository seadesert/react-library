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
    'dark': {'primary': '#42a5f5', 'secondary': '#ab47bc', 'error': '#e57373', 'sucess': '#81c784',
            'info': '#4fc3f7', 'background': '#262626', 'text': '#fff'},
    'light': {'primary': '#e3f2fd', 'secondary': '#f3e5f5', 'error': '#d32f2f', 'sucess': '#388e3c',
            'info': '#0288d1', 'background': '#FBFBFB', 'text': '#000'}
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
      <button onClick={swapTheme} id="theme" style={{'backgroundColor': theme['primary'], 'color': theme['text'], 'fontSize': '16pt'}}>☀</button>
      <Routes>
        <Route path="/" element={Library(theme)}/>
        <Route path="/reader" element={Reader(theme)}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
