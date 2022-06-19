import logo from '../logo.svg';
import '../App.css';
import { Icon } from '@iconify/react';
import { useState } from "react";
import { Link } from 'react-router-dom'
function Book(id, title, author, cover, status, theme)
{
  var cover_div, book_status;
  if(cover == undefined)
  {
    cover_div = <div className='cover'> <span className='cover-text'>{title.length >= 32 ? title.substring(0, 32) + ' ...' : title}</span> </div>;
  }
  else
  {
    cover_div = <div className='cover'>
      <img className='cover-image' title={title} src={cover}></img>
    </div>
  }
  
  var color;
  if (status == true)
  {
    color = { 'backgroundColor': theme['info'] };
    book_status = 'Completed'
  }
  else if(status == undefined)
  {
    color = { 'backgroundColor': theme['sucess']  };
    book_status = 'Not yet started'

  }
  else if(status == false) {
    color = { 'backgroundColor': theme['error']  };
    book_status = 'In progress'
  }

  return (
    <div id={id} className='book' style={{'backgroundColor': theme['secondary']}}>
        {cover_div}
        <span className='title' title={title}>{title}</span>
        <span className='author' title={author}>{author}</span>
        <Link to='/reader'>
          <button className='read-btn' style={{'backgroundColor': theme['sucess']}}>Read Book</button>
        </Link>
        <hr className='status' title={book_status} style={color}></hr>
    </div>
  );
}
const Library = (theme) => 
{
    return (
      <div className='library' style={{'backgroundColor': theme['background'], 'color': theme['text']}}>
        <div className='App-header'>
          <div id='heading'>
            <span className='mode'>Library</span>
          </div>
          <div className="options">
            <select className="option">
              <option value="last_read">Last Read</option>
              <option value="lastest">Latest</option>Swap
              <option value="title">Title</option>
              <option value="progress">Progress</option>
            </select>

            <select className="option">
              <option value="card_view">Card View</option>
              <option value="list_view">List View</option>
            </select>
            
            <button id="upload" className="option" style={{'backgroundColor': theme['primary'], 'color': theme['text']}}>Upload</button>
          </div>
        </div>
        <div className='shelf'>
          {Book(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'content.jpg', true, theme)}
          {Book(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Book author', undefined, false, theme)}
          {Book(3, 'Book title', 'Book author', undefined, undefined, theme)}
          {Book(4, 'Book title', 'Book author', undefined, true, theme)}
          {Book(5, 'Book title', 'Book author', undefined, true, theme)}
          {Book(6, 'Book title', 'Book author', undefined, true, theme)}
          {Book(7, 'Book title', 'Book author', undefined, true, theme)}
          {Book(8, 'Book title', 'Book author', undefined, true, theme)}
          {Book(9, 'Book title', 'Book author', undefined, true, theme)}
        </div>
        <footer>
          <div className="container">
            <span className="footer-items"><strong>&copy;2022 matrix library</strong></span>
            <Link to="/licenses" className="footer-items">Licenses</Link>
            <Link to="/issues" className="footer-items">Issues</Link>
            <Link to="/about" className="footer-items">About</Link>
          </div>
        </footer>
      </div>
    )
}

export default Library;