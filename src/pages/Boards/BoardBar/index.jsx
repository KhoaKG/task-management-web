import React from 'react'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
  paddingX: '5px',
  borderRadius: '4px',
  color : 'white',
  bgcolor: 'transparent',
  border: 'none',
  '& .MuiSvgIcon-root':{
    color: 'white',
  },
  '&:hover':{
    bgcolor: 'primary.50',
  },
}
function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      gap: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}>

        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, paddingX: 2}}>
          <Chip 
            icon={<DashboardIcon />} 
            label="NguyenNhatKhoa Board" 
            sx={MENU_STYLES}
            clickable
          />
          <Chip 
            icon={<VpnLockIcon />} 
            label="Public/Private Workplaces" 
            sx={MENU_STYLES}
            clickable
          />
          <Chip 
            icon={<AddToDriveIcon />} 
            label="Add To Google Drive" 
            sx={MENU_STYLES}
            clickable
          />
          <Chip 
            icon={<BoltIcon />} 
            label="Automation" 
            sx={MENU_STYLES}
            clickable
          />
          <Chip 
            icon={<FilterListIcon />} 
            label="Filter" 
            sx={MENU_STYLES}
            clickable
          />
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <Button 
            variant="outlined" 
            startIcon={<PersonAddIcon/>}
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover':{
                borderColor: 'white',
              }
            }}
          >
            Invite
          </Button>
          <AvatarGroup 
            max={4} 
            sx={{
              gap: '10px',
              '& .MuiAvatar-root':{
                height: 34,
                width: 34,
                fontSize: 16,
                border: 'none'
              }
            }}>
            <Tooltip title="Nhat Khoa">
              <Avatar alt="Nhat Khoa" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/484599237_2052449475257510_5870588787411688094_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=n9ZDdVZzvMgQ7kNvwF4CaMg&_nc_oc=AdlAf7jVqUb-EkI1tPSA-FSY3SuJVAfvJaxmUmDQVV55IGCXnuqqps3pdkHo908pNyg&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=p2lX0WJvD7Of9A_1ASxMWQ&oh=00_AfSdlcQjjHKihziaQvJ2gCY6s1bDV3l2cCQKykTEuGHOAw&oe=68716229" />
            </Tooltip>
            <Tooltip title="Nhat Khoa">
              <Avatar alt="Nhat Khoa" src="https://th.bing.com/th?q=%e1%ba%a2nh+Con+Ch%c3%b3+Cute&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=strict&t=1&mw=247" />
            </Tooltip>
            <Tooltip title="Nhat Khoa">
              <Avatar alt="Nhat Khoa" src="https://th.bing.com/th?id=OIF.YeGGJxePZBBTOHv%2bu8N4Bg&w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            </Tooltip>
            <Tooltip title="Nhat Khoa">
              <Avatar alt="Nhat Khoa" src="https://th.bing.com/th/id/OIF.Hzlr4nT7qmHZ2RqeLhZbRg?w=183&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            </Tooltip>
            <Tooltip title="Nhat Khoa">
              <Avatar alt="Nhat Khoa" src="https://th.bing.com/th/id/OIP.4TZ_pddqu8qnMr_LCCr8dQHaE8?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
            </Tooltip>
          </AvatarGroup>
        </Box>
    </Box>
  )
}

export default BoardBar
