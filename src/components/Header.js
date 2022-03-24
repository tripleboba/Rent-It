import React, { useContext } from 'react'
import { useStateValue, StateContext } from '../providers/StateProvider'
// import logo from '../styles/logo.png'
import {Link} from 'react-router-dom'


export default function Header() {
  
  // for count on-renting items when 'rent now' button is clicked
  // const [{rentingBasket}, dispatch] = useStateValue();
  const { addToRenting, rentingBasket } = useContext(StateContext);
  const formatItemsCounter = items => {
    if (items === 0) return '';
    else if (items === 1) return "(1 item)";
    else return `(${items} items)`;
  }

  return (

      <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div className="navbar-brand">
          {/* <Link>  className="navbar-item" to="/">RENT IT</Link> */}
          {/* <div className="navbar-item"> */}
            <Link  className="navbar-item"
                to="/">
                {/* <img src={logo} alt="logo" width="auto" height="100%"/> */}
                <strong>RENT IT</strong>
            </Link>
          {/* </div> */}
        </div>
        
        <div className="navbar-end">
          {/* <div className="navbar-item"> */}
            <Link  className="navbar-item"
                to="/renting"> On Renting {formatItemsCounter(rentingBasket.length)} </Link>
            <Link  className="navbar-item"
                to="/rented"> Rented History </Link>
            <div className="navbar-item"> Signup/Login </div>
          {/* </div> */}
        </div>

      </nav>

  )
}
