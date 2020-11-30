import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'


const Quote=({indiceQ,quotes,changeQuote})=>{
    const q=quotes.length===0?(<p id='text'>''Genius is one percent inspiration and ninety-nine percent perspiration.</p>):(<p id='text'>''{quotes[indiceQ].text}</p>)
    const a=quotes.length===0?(<p id='author'>--Thomas Edison</p>):(<p id='author'>--{quotes[indiceQ].author}</p>)

    return (
      <div  style={{background:'white'}} className='quote-machine'>
          {q}
          {a}
       
          <button><a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} /></a></button>
          <button> <a href='twitter.com/intent/tweet'><FontAwesomeIcon icon={faTwitter} /></a></button>
          <button id='new-quote' onClick={changeQuote}>New Quote</button>
      </div>
    );
    
}

export default Quote;