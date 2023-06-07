import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface StepOneEnterEmailProps {
  btnTitle: string
  handleNext: React.MouseEventHandler
}

export default function StepOneEnterEmail({ btnTitle, handleNext }: StepOneEnterEmailProps) {
  return (
    <React.Fragment>
      <TextField label='Email' id='outlined-start-adornment' sx={{ m: 1, width: '40ch' }} />

      <Button sx={{ marginTop: '1ch' }} variant='outlined' onClick={handleNext}>
        {btnTitle}
      </Button>
    </React.Fragment>
  )
}
