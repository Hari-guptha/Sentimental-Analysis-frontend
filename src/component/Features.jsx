import React from 'react'
import img1 from '../assets/img/2.png'
import img2 from '../assets/img/3.png'
import { Box } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import '../assets/css/feature.css'

const Features = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", padding: "5% 0", color: "#404A86" }}>Make Use Of Our Features For Analysing</h1>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", margin: "10px 15%", gap:1 }}>
                    <Box id="card">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", margin: "30px 25%",gap:1  }}>
                    <Box id="card1">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card1">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                </Box>
                <div style={{ display: "flex", position: "absolute" }}>
                    <img style={{ width: "350px", paddingTop: "10%" }} src={img1} alt="img" />
                    <img style={{ width: "350px", height: "160px", paddingTop: "1%", paddingLeft: "120%" }} src={img2} alt="img" />
                </div>
            </Box>
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
                <Box sx={{ display: "flex", margin: "10px 15%",flexDirection:"column" }}>
                    <Box id="card3">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card3">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card3">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card3">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                    <Box id="card3">
                        <h3 style={{ marginRight: "20px" }}>Sentiment Analysis</h3>
                        <InsertEmoticonIcon />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Features