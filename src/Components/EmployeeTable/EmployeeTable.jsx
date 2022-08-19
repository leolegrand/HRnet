import React, { useState } from 'react'
import '../../styles/employeetable.css'

import { DataGrid } from '@mui/x-data-grid'

import humanRessources from './human-resources.png'
import glass from './magnifying-glass.png'

import { useSelector } from 'react-redux'

const EmployeeTable = () => {
  const employeeDatabase = useSelector((state) => state)

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date Of Birth', width: 100 },

    { field: 'street', headerName: 'Street', width: 250 },
    { field: 'city', headerName: 'City', width: 130 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zipCode', headerName: 'Zip Code', width: 80 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 100 },
  ]

  const [pageSize, setPageSize] = useState(10)

  const [rows, setRows] = useState(employeeDatabase)

  const filterEmployees = (e) => {
    setRows(
      employeeDatabase.filter((item) => {
        const values = Object.values(item)
        return values.some((value) =>
          value.toUpperCase().includes(e.target.value.toUpperCase())
        )
      })
    )
  }

  return (
    <div className="employee-table">
      <div className="employee-table__bg">
        <img className="employee-table__img" src={humanRessources} alt="" />
      </div>

      <h2 className="employee-table__title">Current Employee</h2>

      <div className="employee-table__search">
        <input
          placeholder="Search for a name, adress, department, date..."
          className="employee-table__search-input"
          type="text"
          onChange={filterEmployees}
        />
        <img src={glass} alt="" className="employee-table__search-icon" />
      </div>

      <DataGrid
        sx={{
          border: '0',
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 25, 50, 100]}
        hideFooterSelectedRowCount
      />
    </div>
  )
}

export default EmployeeTable
