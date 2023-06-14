import Chats from '@/components/LeftPanel/Chats/Chats'
import Box from '@mui/material/Box'
import React from 'react'
import TopBar from './TopBar'

export default function LeftPanel() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { lg: '35%', sm: '100%' },
        height: '100%',
        maxHeight: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <TopBar />
      <Chats />
    </Box>
  )
}
