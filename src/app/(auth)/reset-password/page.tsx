'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepOneEnterEmail from '@/components/Auth/StepOneEnterEmail'
import StepTwoEnterCode from '@/components/Auth/StepTwoEnterCode'
import StepFourFinished from '@/components/Auth/StepFourFinished'
import StepThreeNewPassword from '@/components/Auth/StepThreeNewPassword'

const steps = ['Email', 'Validation code', 'Reset password']

export default function ResetPassword() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    const newActiveStep = activeStep + 1
    setActiveStep(newActiveStep)
  }

  function getCurrentStepComponent() {
    if (activeStep === 0) return <StepOneEnterEmail btnTitle='Send validation code' handleNext={handleNext} />
    if (activeStep === 1) return <StepTwoEnterCode handleNext={handleNext} />
    if (activeStep === 2) return <StepThreeNewPassword handleNext={handleNext} />
    if (activeStep === 3) return <StepFourFinished />
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
      <Stepper sx={{ margin: '50px' }} nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingBottom: '10ch',
        }}
      >
        {getCurrentStepComponent()}
      </Box>
    </Box>
  )
}
