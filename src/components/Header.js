import { React } from 'react'
import './Header.scss'
import logo from '../styles/logo.png'

export default function Header() {
  return (

      <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div className="navbar-brand">
          {/* <a  className="navbar-item" href="/">RENT IT</a> */}
          {/* <div className="navbar-item"> */}
            <a  className="navbar-item"
                href="/">
                {/* <img src={logo} alt="logo" width="auto" height="100%"/> */}
                <strong>RENT IT</strong>
            </a>
          {/* </div> */}
        </div>
        
        <div className="navbar-end">
          {/* <div className="navbar-item"> */}
            <a  className="navbar-item"
                href="/renting"> On Renting (0 item) </a>
            <a  className="navbar-item"
                href="/rented"> Rented History </a>
            <div className="navbar-item"> Signup/Login </div>
          {/* </div> */}
        </div>

      </nav>

  )
}
