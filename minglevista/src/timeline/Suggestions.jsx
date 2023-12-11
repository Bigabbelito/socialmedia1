import React from 'react'
import './Suggestions.css'
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className='suggestions'>


      <div className='suggestions__title'>Suggestions for you</div>


      <div className='suggesstions__usernames'>

      <div className='suggesstion__username'>
      <div className='username__left'>
        <span className='avatar'>
          <Avatar>A</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>Abbelito_</span>
          <span className='relation'>New to instagram</span>
        </div>
      </div>
      <button className='follow__button'>Follow</button>
      </div>

      <div className='suggesstion__username'>
      <div className='username__left'>
        <span className='avatar'>
          <Avatar>SA</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>SaraAli_</span>
          <span className='relation'>New to instagram</span>
        </div>
      </div>
      <button className='follow__button'>Follow</button>
      </div>

      <div className='suggesstion__username'>
      <div className='username__left'>
        <span className='avatar'>
          <Avatar>M</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>Moomo00</span>
          <span className='relation'>New to instagram</span>
        </div>
      </div>
      <button className='follow__button'>Follow</button>
      </div>

      <div className='suggesstion__username'>
      <div className='username__left'>
        <span className='avatar'>
          <Avatar>A</Avatar>
        </span>
        <div className='username__info'>
          <span className='username'>Alawie_</span>
          <span className='relation'>New to instagram</span>
        </div>
      </div>
      <button className='follow__button'>Follow</button>
      </div>

      </div>


    </div>
  )
}

export default Suggestions
