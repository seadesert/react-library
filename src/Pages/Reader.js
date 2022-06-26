import { Link, useNavigate } from 'react-router-dom'
import { loremIpsum } from 'react-lorem-ipsum';
import { useState, useEffect } from "react";
import './Reader.css';




const Reader = (theme) => {   
    const totalPage = 100;
    const [currentPage, setCurrentPage] = useState(1);
    const handleInput = event => {
        setCurrentPage(event.target.value);
    }

    const handleKeyDown = (e) => {
        var p = currentPage;
        if(e.key == 'ArrowLeft')
        {
            if(p != 1)
                setCurrentPage(p-1);
        }
        else if (e.key == 'ArrowRight')
        {
            if(p < totalPage-1)
                setCurrentPage(p+1);
        }
        else if (e.key == 'Escape')
        {

        }
    };

    const Pages = (page_no) => {
        const pages = []
        for(var i=0; i<=100; i++)
        {
            pages.push(loremIpsum({p:3}).map(text => (
                <div className="text" key={text}>
                  {text + i}
                </div> )));
        }
        return( pages[page_no] );
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }, []);

    return(
        <div className='interface'>
            <div className='content'>         
                <div className='reader' style={{'backgroundColor': theme['background'], 'color': theme['text']}}>
                    <div id='left-page' className='page'>
                        {Pages(currentPage)}
                    </div>
                    <div id='page-border'></div>
                    <div id='right-page' className='page'>
                    </div>
                </div>
            </div>
            <div className='controls'>
                <span id='progress-text'>{currentPage}/{totalPage}</span>
                <input id='progress' onChange={handleInput} value={currentPage} type='range'  min='1' max={totalPage} />
                <Link to='/'>
                    <button id='exit-btn' > × </button>
                </Link>
            </div>
        </div>

    );

}

export default Reader;