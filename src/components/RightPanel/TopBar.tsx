import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { default as StoreInterface } from '@/store/entities/Store'
import { default as ChatInterface } from '@/store/entities/Chat'

export default function TopBar() {
  const chat = useSelector<StoreInterface, ChatInterface>(state => state.chat)

  return (
    <AppBar component='nav' sx={{ position: 'sticky' }}>
      <Toolbar>
        <Image
          src={`${chat.userOne.profilePicture}`}
          alt='profilePicture'
          quality={100}
          style={{ borderRadius: '50%' }}
          width={60}
          height={55}
        />
      </Toolbar>
    </AppBar>
  )
}
