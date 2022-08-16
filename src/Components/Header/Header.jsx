import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

const Header = ({ page }) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>HR</h1>
        <span>net</span>
      </div>

      <nav className="header__nav">
        {page === 'employeeTable' ? (
          <Link className="header__nav__button active-page" to={'/'}>
            Create Employee
          </Link>
        ) : (
          <Link className="header__nav__button active-page" to={'/employee'}>
            View Current Employees
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
