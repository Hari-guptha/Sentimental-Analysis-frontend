import React from 'react'
import img1 from '../assets/img/2.png'
import img2 from '../assets/img/3.png'
import { Box } from '@mui/material'

const Fake = () => {
    return (
        <>
            <Box id="custombox">
                <h2 id='boxheader'>Fake Sentiment Analysis</h2>
                <h4 id='boxheader2'>Type Your Text, Upload Dataset</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input style={{ width: "400px" }} id='boxsearch' placeholder='example: Jio Fiber Network is Fast' type="text" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <h1 id='btns' >Analyse</h1>
                        <h1 id='btns'>Upload</h1>
                    </div>
                </div>
                <h5 style={{ textAlign: "center", paddingTop: "30px", fontWeight: "400" }} >(For File Upload only xlsx, csv format files are accepted)</h5>
            </Box>
            <div id='tex' style={{ display: "flex", position: "absolute" }}>
                <img style={{ width: "350px", paddingTop: "10%" }} src={img1} alt="img" />
                <img style={{ width: "350px", height: "160px", paddingTop: "1%", paddingLeft: "120%" }} src={img2} alt="img" />
            </div>
        </>
    )
}

export default Fake