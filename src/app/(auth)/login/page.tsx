'use client'
import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ mt: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Box sx={{ mt: 2 }} component='form' onSubmit={handleSubmit} noValidate>
          <TextField label='Email' id='outlined-start-adornment' sx={{ width: '100%' }} />

          <FormControl sx={{ mt: 2, width: '100%' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>

          <FormControlLabel
            sx={{ mt: 1 }}
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />

          <Grid sx={{ mt: 1, mb: 1 }} container justifyContent='space-between'>
            <Grid item>
              <Link color='secondary' sx={{ cursor: 'pointer' }} onClick={() => router.push('reset-password')}>
                Forgot your password?
              </Link>
            </Grid>

            <Grid item>
              <Link color='secondary' sx={{ cursor: 'pointer' }} onClick={() => router.push('register')}>
                Sign Up
              </Link>
            </Grid>
          </Grid>

          <Button sx={{ mt: 1 }} variant='contained' fullWidth onClick={() => router.push('main')}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
