import { Link } from 'react-router-dom'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import './Reader.css';

const Reader = (theme) => {   
    return(
        <div>            
            <Link to='/'>
                <button>Exit</button>
            </Link>
            <input type='range'></input>
            <div className='reader' style={{'backgroundColor': theme['background'], 'color': theme['text']}}>
                <div id='left-page' className='page'>
                <LoremIpsum p={3}/>
                </div>
                <div id='page-border'></div>
                <div id='right-page' className='page'>
                <LoremIpsum p={3}/>
                </div>
            </div>
        </div>
    );
}

export default Reader;