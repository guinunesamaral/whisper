import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchBar from './SearchBar'
import ResponsiveDrawer from './ResponsiveDrawer'

export default function TopBar() {
  const [open, setOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <AppBar component='nav' sx={{ position: 'sticky' }}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <SearchBar />

        <ResponsiveDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      </Toolbar>
    </AppBar>
  )
}
