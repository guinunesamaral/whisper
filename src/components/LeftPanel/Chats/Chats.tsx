import Box from '@mui/material/Box'
import React from 'react'
import ChatItem from './ChatItem'

export default function Chats() {
  const [chats] = React.useState(
    Array.from({ length: 20 }, () => ({
      profilePicture:
        'https://static.wikia.nocookie.net/halo/images/c/c0/CortanaHalo5.png/revision/latest/scale-to-width-down/700?cb=20211012223501&path-prefix=pt',
      name: 'Cortana',
      email: 'cortana@outlook.com',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales',
    }))
  )

  return (
    <Box sx={{ mt: '11px' }}>
      {chats.map((c, index) => (
        <ChatItem
          key={index}
          profilePicture={c.profilePicture}
          name={c.name}
          email={c.email}
          lastMessage={c.lastMessage}
        />
      ))}
    </Box>
  )
}
