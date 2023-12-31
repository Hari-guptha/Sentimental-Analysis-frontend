import { AppBar, Box, Drawer, Stack } from '@mui/material'
import { useState } from 'react'
//Icon
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//Style
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    const [fun, setfun] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar id='appbar' style={{ position: "relative" }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <div style={{ display: "flex", marginRight: '5%' }}>
                            <Link id="Link" to='/'><h1 id='navitems1'>Home</h1></Link>
                            <Link id="Link" to='/about'><h1 id='navitems1'>About us</h1></Link>
                            <div>
                                <Button
                                    className='drop'
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Features
                                </Button>
                                <Menu sx={{ marginTop: "20px" }}
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <Link id="Link" to='/sentiment'><MenuItem onClick={handleClose}>Sentimental Analysis</MenuItem></Link>
                                    <Link id="Link" to='/churn'><MenuItem onClick={handleClose}>Churn Prediction</MenuItem></Link>
                                    <Link id="Link" to='/social'><MenuItem onClick={handleClose}>Social Listening</MenuItem></Link>
                                    <Link id="Link" to='/fake'><MenuItem onClick={handleClose}>Fake Detection</MenuItem></Link>
                                    <Link id="Link" to='/meme'><MenuItem onClick={handleClose}>Meme Analysis</MenuItem></Link>
                                </Menu>
                            </div>
                            <Link id="Link" to="/login"><h1 className="navbtn1" id='navitems1'>Login</h1></Link>
                            <Link id="Link" to="/signup"><h1 style={{ background: "#404A86", color: "white" }} className="navbtn1" id='navitems1'>Signup</h1></Link>
                        </div>
                    </Box>
                </Box>
                <Box sx={{ display: { sm: "none", xs: "block" } }}>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <MenuIcon id="menuicon" onClick={e => (setfun(true))} />
                    </div>
                </Box>
            </AppBar>

            <Drawer
                anchor={'left'}
                open={fun}
                onClose={e => (setfun(false))} >
                <div style={{ display: "flex" }}>
                    <CloseIcon id="closeicon" onClick={e => (setfun(false))} />
                </div>
                <br />
                <br />
                <div style={{ width: "300px" }}>
                    <Link id="Link" to="/"><h1 id='navitems1'>Home</h1></Link>
                    <Link id="Link" to="/about"><h1 id='navitems1'>About us</h1></Link>
                    <Link id="Link" to="/sentiment"><h1 id='navitems1'>Sentimental Analysis</h1></Link>
                    <Link id="Link" to="/churn"><h1 id='navitems1'>Churn Prediction</h1></Link>
                    <Link id="Link" to="/social"><h1 id='navitems1'>Social Listening</h1></Link>
                    <Link id="Link" to="/fake"><h1 id='navitems1'>Fake Detection</h1></Link>
                    <Link id="Link" to="/meme"><h1 id='navitems1'>Meme Analysis</h1></Link>
                    <Link id="Link" to="/login"><h1 style={{ width: "50px", marginTop: "20px" }} className="navbtn1" id='navitems1'>Login</h1></Link>
                    <Link id="Link" to="/signup"><h1 style={{ background: "#404A86", color: "white", width: "50px" }} className="navbtn1" id='navitems1'>Signup</h1></Link>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar