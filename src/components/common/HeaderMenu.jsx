import React from 'react'
import {Menu,MenuItem} from '@mui/material';
import {Link} from 'react-router-dom';
import { routePath } from '../../services/route';
export default function HeaderMenu({open,handleClose}) {
    const openMenu =Boolean(open);
    return (
    <Menu style={{"marginTop":40}}
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    anchorEl={open}
    open={openMenu}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    } }
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
        <Link to={`${routePath.categories}?category=popular`} style={{textDecoration:'none',color:'inherit'}}><MenuItem onClick={handleClose}>Popular</MenuItem></Link>
        <Link to={`${routePath.categories}?category=toprated`} style={{textDecoration:'none',color:'inherit'}}><MenuItem onClick={handleClose}>Top Rated</MenuItem></Link>
        <Link to={`${routePath.categories}?category=upcoming`} style={{textDecoration:'none',color:'inherit'}}><MenuItem onClick={handleClose}>Upcoming</MenuItem></Link>
    </Menu>
  )
}
