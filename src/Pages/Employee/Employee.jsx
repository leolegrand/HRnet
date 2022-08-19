// REACT
import React from 'react'

// COMPONENTS
import Header from '../../Components/Header/Header'
import EmployeeTable from '../../Components/EmployeeTable/EmployeeTable'

// CSS
import '../../styles/employee.css'

const Employee = () => {
  document.title = 'HRnet - Employees'
  return (
    <>
      <Header page={'employeeTable'} />
      <EmployeeTable />
    </>
  )
}

export default Employee
