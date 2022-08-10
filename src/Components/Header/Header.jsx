import React from 'react'
import '../../styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>HR</h1>
        <span>net</span>
      </div>
      <nav className="header__nav">
        <button className="header__nav__button active-page">
          View Current Employee
        </button>
      </nav>
    </header>
  )
}

export default Header
