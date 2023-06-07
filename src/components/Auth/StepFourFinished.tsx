import React from 'react'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'

export default function StepFourFinished() {
  const router = useRouter()

  setTimeout(() => {
    router.push('/main')
  }, 1000)

  return <Typography variant='h4'>Congratulations, you can now use the app!</Typography>
}
