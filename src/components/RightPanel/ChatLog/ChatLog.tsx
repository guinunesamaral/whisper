import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Message from './Message/Message'

export default function ChatLog() {
  const [messages] = useState(Array.from({ length: 10 }, () => ({})))
  return (
    <Box
      sx={{
        height: '100%',
        mb: '11px',
      }}
    >
      {messages.map((_, index) => (
        <Message
          key={index}
          text='oi'
          id={0}
          image={null}
          dateCreated={new Date()}
          dateUpdated={new Date()}
          from={null}
          to={null}
        />
      ))}
    </Box>
  )
}
