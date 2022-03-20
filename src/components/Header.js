import { React, Fragment } from 'react'
// import './Header.scss'
import {Button} from 'bulma'

export default function Header() {
  return (
    <Fragment>

      <div className="navbar">
        <div className="header_logo">RENT IT</div>
        <div className="header_nav">
          <div className="header_nav_item">On Renting (0 item)</div>
          <div className="header_nav_item">Rented History</div>
          <div className="header_nav_item">Signup/SignIn</div>
        </div>
      
      </div>

    </Fragment>
  )
}
