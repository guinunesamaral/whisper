import Box from '@mui/material/Box'
import React from 'react'
import Message from './Message/Message'

export default function ChatLog() {
  return (
    <Box
      sx={{
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://wallpapercave.com/dwp2x/wp7373636.jpg')",
      }}
    >
      <Message text='oi' image={null} dateCreated={new Date()} from={null} to={null} />
    </Box>
  )
}
