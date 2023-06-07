'use client'
import React from 'react'
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface ChatItemProps {
  profilePicture: string
  name: string
  email: string
  lastMessage: string
}

export default function ChatItem({ profilePicture, name, lastMessage }: ChatItemProps) {
  return (
    <Paper elevation={5} sx={{ m: '10px', marginTop: 0 }}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: '4px 6px',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <Image src={`${profilePicture}`} alt='profilePicture' width={60} height={60} style={{ borderRadius: '50%' }} />

        <Box sx={{ p: 1, mr: 1 }}>
          <Typography variant='h6'>{name}</Typography>

          <Typography variant='body2' noWrap={true}>
            {lastMessage}
          </Typography>
        </Box>
      </Card>
    </Paper>
  )
}
