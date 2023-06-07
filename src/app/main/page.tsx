'use client'
import React from 'react'
import Box from '@mui/material/Box'
import LeftPanel from '@/components/LeftPanel/LeftPanel'
import RightPanel from '@/components/RightPanel/RightPanel'

export default function Main() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <LeftPanel />
      <RightPanel />
    </Box>
  )
}
