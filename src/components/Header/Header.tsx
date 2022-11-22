import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <img className='wave-icon' src='/images/wave.png' alt="" />
      <a href="/">
        <h1 className='app-heading'> Badprognoser</h1>
      </a>
      <img className='surfboard-icon' src="/images/surfboard.png" alt="" />
    </div>
  )
}
