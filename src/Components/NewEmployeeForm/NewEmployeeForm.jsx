import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { employeesAddition } from '../../features/employees/employeesSlice'

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

import Dialog from 'leolegrandm-simple-dialog/dist/components/Dialog'
import newUser from './new-user.png'
import formError from './form-error.png'

import '../../styles/newemployeeform.css'
import { useNavigate } from 'react-router-dom'

const NewEmployeeForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  })
  const [birthDate, setBirthdate] = useState(null)
  const [startDate, setStartdate] = useState(null)
  const [userDepartment, setuserDepartment] = useState('')
  const [userLocationState, setuserLocationState] = useState('')
  const [isShown, setIsShown] = useState(false)
  const [formIsValid, setFormIsValid] = useState(null)

  const datePickerHandle = (name, value) => {
    setUser({
      ...user,
      [name]: new Date(value).toLocaleDateString('en'),
    })
  }

  const inputHandle = (e) => {
    setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const newUserDialog = {
    title: 'succes',
    icon: newUser,
    altText: 'employee image',
    content: 'New employee successfully saved',
    cta: 'Thanks, machine !',
  }

  const formErrorDialog = {
    title: 'error',
    icon: formError,
    altText: 'error image',
    content: 'Please enter a first name, last name and a department.',
    cta: 'Whoops !',
  }

  const handleSubmit = (e) => {
    if (
      user.firstName !== '' &&
      user.lastName !== '' &&
      user.department !== ''
    ) {
      setFormIsValid(true)
      setIsShown(!isShown)
      user.id = `${user.firstName}${user.lastName}${user.department}`
      dispatch(employeesAddition(user))
    } else {
      setFormIsValid(false)
      setIsShown(!isShown)
    }
  }

  return (
    <div className="new-employee-form">
      <h2 className="new-employee-form__title">Create Employee</h2>

      <TextField
        id="outlined-basic"
        required={true}
        label="First Name"
        variant="outlined"
        name={'firstName'}
        onChange={inputHandle}
      />

      <TextField
        id="outlined-basic"
        required={true}
        label="Last Name"
        aria-label="last-name"
        variant="outlined"
        name={'lastName'}
        onChange={inputHandle}
      />

      <LocalizationProvider dateAdapter={AdaptaterMoment}>
        <DatePicker
          label="Date of Birth"
          value={birthDate}
          onChange={(newValue) => {
            setBirthdate(newValue)
            datePickerHandle('dateOfBirth', newValue)
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
            datePickerHandle('startDate', newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        aria-label="street"
        id="outlined-basic"
        label="Street"
        variant="outlined"
        name={'street'}
        onChange={inputHandle}
      />

      <TextField
        aria-label="city"
        id="outlined-basic"
        label="City"
        variant="outlined"
        name={'city'}
        onChange={inputHandle}
      />

      <div className="new-employee-form__location">
        <Box className={'new-employee-form__location__state'}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userLocationState}
              label="State"
              name="state"
              aria-label="state"
              onChange={(event) => {
                setuserLocationState(event.target.value)
                inputHandle(event)
              }}
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
          aria-label="zip code"
          label="Zip Code"
          variant="outlined"
          name={'zipCode'}
          onChange={inputHandle}
        />
      </div>

      <Box sx={{ minWidth: 120 }}>
        <FormControl required fullWidth>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            required={true}
            aria-label="department"
            value={userDepartment}
            label="Department"
            name={'department'}
            onChange={(event) => {
              setuserDepartment(event.target.value)
              inputHandle(event)
            }}
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

      {isShown ? (
        <Dialog
          ctaCallback={() => {
            setIsShown(!isShown)
            if (formIsValid) {
              navigate('/employee')
            }
          }}
          modalType={formIsValid ? newUserDialog : formErrorDialog}
          closeIcon={true}
          callToAction={true}
          optionParams={true}
        />
      ) : null}
    </div>
  )
}

export default NewEmployeeForm
