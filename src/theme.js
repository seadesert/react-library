import { useState } from "react";
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");

function Theme() {
    const [theme, setTheme] = useState(null);
    let t = ReactSession.get("theme");
  
    if(t == null)
      t = 'dark';

    else if(t == 'dark')
      t = 'light';
    else
      t = 'dark';    
    ReactSession.set("theme", t);
    setTheme(t);
  }
  export default Theme;