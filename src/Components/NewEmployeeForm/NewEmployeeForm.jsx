import React, { useState } from 'react'
import '../../styles/newemployeeform.css'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
// textfield import
import TextField from '@mui/material/TextField'

// Date picker import
import AdaptaterMoment from '@date-io/moment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { states } from '../../services/usaStates'
import { departments } from '../../services/hrnetDepartments'
import { Button } from '@mui/material'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded'

import { Dialog } from 'leolegrandm-simple-dialog/dist'

const handleSubmit = () => {
  return (
    <Dialog
      modalType={'succes'}
      closeIcon={true}
      callToAction={true}
      optionParams={false}
    />
  )
}

const NewEmployeeForm = () => {
  const [birthDate, setBirthdate] = useState(null)
  const [startDate, setStartdate] = useState(null)

  const [userLocationState, setuserLocationState] = useState('')

  const handleChangeLocationState = (event) => {
    setuserLocationState(event.target.value)
  }

  const [userDepartment, setuserDepartment] = useState('')

  const handleChangeDepartment = (event) => {
    setuserDepartment(event.target.value)
  }

  return (
    <div className="new-employee-form">
      <h2 className="new-employee-form__title">Create Employee</h2>

      <TextField
        id="outlined-basic"
        required={true}
        label="First Name"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        required={true}
        label="Last Name"
        variant="outlined"
      />

      <LocalizationProvider dateAdapter={AdaptaterMoment}>
        <DatePicker
          label="Date of Birth"
          value={birthDate}
          onChange={(newValue) => {
            setBirthdate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdaptaterMoment}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setStartdate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField id="outlined-basic" label="Street" variant="outlined" />

      <TextField id="outlined-basic" label="City" variant="outlined" />

      <div className="new-employee-form__location">
        <Box className={'new-employee-form__location__state'}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userLocationState}
              label="State"
              onChange={handleChangeLocationState}
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TextField
          className={'new-employee-form__location__zip'}
          type="number"
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
        />
      </div>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userDepartment}
            label="Department"
            onChange={handleChangeDepartment}
          >
            {departments.map((department, index) => (
              <MenuItem key={index} value={department.name}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className="new-employee-form__save">
        <Button
          onClick={handleSubmit}
          fullWidth={false}
          variant="outlined"
          endIcon={<SaveRoundedIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default NewEmployeeForm
