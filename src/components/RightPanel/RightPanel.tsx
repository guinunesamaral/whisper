import Box from '@mui/material/Box'
import React from 'react'
import ChatLog from './ChatLog/ChatLog'

export default function RightPanel() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
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
      <ChatLog />
    </Box>
  )
}
