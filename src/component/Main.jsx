import { Box } from '@mui/material'
import React from 'react'
import mainimg from '../assets/img/1.png'
import '../assets/css/main.css'

const Main = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexWrap: "wrap-reverse" }}>
                <img id='mainimg' style={{ width: "40%", margin: "5% 0 0 10%" }} src={mainimg} alt="img" />
                <Box sx={{ color: "#404A86" }}>
                    <h1 id="title" style={{ padding: "30% 10% 0 10%", fontSize: "35px" }}>Get Insights Using Sentimental Analysis</h1>
                    <h3 id="title2" style={{ padding: "5% 10% 0 10%" }}>Understand your customers like never before</h3>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <h1 id="mainbtn" style={{ background: "#404A86", color: "white", width: "100px", padding: "20px 40px", margin: "5% 10%", borderRadius: "50px", textAlign: "center" }} id='navitems1'>Explore &gt;</h1>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <h1 id="mainbtn" style={{ background: "#404A86", color: "white", width: "100px", padding: "20px 40px", margin: "5% 30%", borderRadius: "50px", textAlign: "center" }} id='navitems1'>Explore &gt;</h1>
            </Box>
        </>
    )
}

export default Main