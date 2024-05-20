import Box from '@mui/material/Box'
import React from 'react'
import ChatLog from './ChatLog/ChatLog'
import TopBar from './TopBar'

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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://wallpapercave.com/dwp2x/wp7373636.jpg')",
      }}
    >
      <TopBar />
      <ChatLog />
    </Box>
  )
}
