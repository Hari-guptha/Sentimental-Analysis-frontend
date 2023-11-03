import React from 'react'
import img1 from '../assets/img/2.png'
import img2 from '../assets/img/3.png'
import { Box } from '@mui/material'
import '../assets/css/common.css'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Sentiment = () => {
    return (
        <>
            <Box id="custombox">
                <h2 id='boxheader'>Sentiment Analysis</h2>
                <h4 id='boxheader2'>Type Your Text, Upload Dataset or Audio</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input style={{ width: "400px" }} id='boxsearch' placeholder='example: Jio Fiber Network is Fast' type="text" />
                        <KeyboardVoiceIcon />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <h1 id='btns' >Analyse</h1>
                        <h1 id='btns'>Upload</h1>
                    </div>
                </div>
                <h5 style={{ textAlign: "center", paddingTop: "30px", fontWeight: "400" }} >(For File Upload only xlsx, csv, wav, mp3 format files are accepted)</h5>
            </Box>
            <div id='tex' style={{ display: "flex", position: "absolute" }}>
                <img style={{ width: "350px", paddingTop: "10%" }} src={img1} alt="img" />
                <img style={{ width: "350px", height: "160px", paddingTop: "1%", paddingLeft: "120%" }} src={img2} alt="img" />
            </div>
        </>
    )
}

export default Sentiment