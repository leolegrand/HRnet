import React from 'react'
import EmployeeTable from '../../Components/EmployeeTable/EmployeeTable'
import Header from '../../Components/Header/Header'
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
