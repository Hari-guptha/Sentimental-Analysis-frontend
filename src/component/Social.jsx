import React from 'react'
import img1 from '../assets/img/2.png'
import img2 from '../assets/img/3.png'
import { Box } from '@mui/material'

const Social = () => {
    return (
        <>
            <Box id="custombox2">
                <h2 id='boxheader'>Social Media Analysis</h2>
                <h4 style={{ marginTop: "90px" }} id='boxheader4'>Enter the Keyword</h4>
                <input style={{ margin: "5px 0 10px 3px" }} id='boxsearch' placeholder='example: Jio Fiber Network is Fast' type="text" />
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <div id='seb'>
                        <div style={{ display: "flex" }}>
                            <h4 style={{ fontWeight: 500 }}>Start Date:</h4>
                            <input style={{ marginLeft: "20px" }} type="text" />
                        </div>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                            <h4 style={{ fontWeight: 500 }}>End Date:</h4>
                            <input style={{ marginLeft: "30px" }} type="text" />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ marginTop: "20px" }} id='btns'>Analyse</h1>
                </div>
            </Box>
            <div id='tex' style={{ display: "flex", position: "absolute" }}>
                <img style={{ width: "350px", paddingTop: "10%" }} src={img1} alt="img" />
                <img style={{ width: "350px", height: "160px", paddingTop: "1%", paddingLeft: "120%" }} src={img2} alt="img" />
            </div>
        </>
    )
}

export default Social