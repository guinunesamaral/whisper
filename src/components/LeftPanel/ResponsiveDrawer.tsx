import React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import ForumIcon from '@mui/icons-material/Forum'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ModalProps } from '@mui/material/Modal'

interface ResponsiveDrawerProps {
  open: boolean
  handleDrawerToggle: ModalProps['onClose']
}

const drawerWidth = 240

function getIcon(index: number) {
  if (index === 0) return <ForumIcon />
  if (index === 1) return <PeopleAltIcon />
  if (index === 2) return <SettingsIcon />
  if (index === 3) return <AccountBoxIcon />
}

export default function ResponsiveDrawer({ open, handleDrawerToggle }: ResponsiveDrawerProps) {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Chats', 'Friends', 'Settings', 'Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{getIcon(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <Box component='nav' sx={{ position: 'absolute', width: drawerWidth, flexShrink: 0 }} aria-label='mailbox folders'>
      <Drawer
        variant='temporary'
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
