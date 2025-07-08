import React from 'react'
import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Card({temporaryHideMedia}) {
  if(temporaryHideMedia){
    return (
      <MuiCard sx={{ 
        maxWidth: 345 ,
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
        <Typography > Card Test 01 </Typography>
        </CardContent>

      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{ 
      maxWidth: 345 ,
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
      sx={{ height: 140 }}
      image="https://www.bing.com/th/id/OIP.hx8JUDxS53LdGvlN4cB02QHaEK?w=329&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
      title="green iguana"
      />
      <CardContent sx={{p: 1.5, '&:last-child': {p: 1.5}}}>
      <Typography > NguyenNhatKhoa </Typography>
      {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
      </Typography> */}
      </CardContent>
      <CardActions sx={{p: '0 4px 8px 4px'}}>
      <Button size="small" startIcon={<GroupIcon/>}>20</Button>
      <Button size="small" startIcon ={<CommentIcon/>}>15</Button>
      <Button size="small" startIcon ={<AttachmentIcon/>}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card