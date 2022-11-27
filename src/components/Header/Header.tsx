import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <a href="/bottenviken">
        <img className='wave-icon' src='/images/wave.png' alt="" />
      </a>
      <a href="/">
        <h1 className='app-heading'> Badprognoser</h1>
      </a>
      <a href="/bottenhavet">
        <img className='surfboard-icon' src="/images/surfboard.png" alt="" />
      </a>
    </div>
  )
}
