import React from 'react'

export default function Nav() {
  return (
     <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">We Are Hiring</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Invester RelationShip</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Advertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Free Listing</a>
            </li>
          </ul>
  )
}
