import { React } from 'react'
import './Header.scss'

export default function Header() {
  return (

      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        
        <div classNameName="navbar-brand">
          <div classNameName="navbar-item">
            <a  className="navbar-item"
                href="/">RENT IT</a>
          </div>
        </div>
        
        <div className="navbar-end">
          <div className="navbar-item">
            <a  className="navbar-item"
                href="/renting">On Renting (0 item) </a>
            <a  className="navbar-item"
                href="/rented">Rented History </a>
            <div className="navbar-item"> Signup/Login </div>
          </div>
        </div>

      </nav>

  )
}
