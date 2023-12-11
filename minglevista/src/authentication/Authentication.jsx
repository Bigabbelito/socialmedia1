import React from 'react'
import './Authentication.css'
import Login from './login'
import Signup from './Signup'
function Authentication() {
  return (
    <div className='authentication'>
      <div className='auth__left'>
        <img  src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"/>
      </div>
      <div className='auth__tight'>
      <Signup />
        <div className='auth__more'>
          <span>
            Don't have an account? <button>Sign up</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Authentication
