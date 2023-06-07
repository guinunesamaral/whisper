import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function StepTwoEnterCode({ handleNext }: { handleNext: React.MouseEventHandler }) {
  return (
    <React.Fragment>
      <TextField label='Code' id='outlined-start-adornment' sx={{ m: 1, width: '40ch' }} />

      <Button sx={{ marginTop: '1ch' }} variant='outlined' onClick={handleNext}>
        Next
      </Button>
    </React.Fragment>
  )
}
