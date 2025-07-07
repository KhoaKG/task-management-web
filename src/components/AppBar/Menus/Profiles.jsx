import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Profiles() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0}}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar 
            sx={{ width: 34, height: 34 }} 
            alt='NhatKhoa' 
            src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/484599237_2052449475257510_5870588787411688094_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=n9ZDdVZzvMgQ7kNvwF4CaMg&_nc_oc=AdlAf7jVqUb-EkI1tPSA-FSY3SuJVAfvJaxmUmDQVV55IGCXnuqqps3pdkHo908pNyg&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=p2lX0WJvD7Of9A_1ASxMWQ&oh=00_AfSdlcQjjHKihziaQvJ2gCY6s1bDV3l2cCQKykTEuGHOAw&oe=68716229'/>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles',
        }}
      >

        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, mr: 2, height: 28}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, mr: 2, height: 28}}/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles