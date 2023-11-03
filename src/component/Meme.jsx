import React from 'react'
import img1 from '../assets/img/2.png'
import img2 from '../assets/img/3.png'
import { Box } from '@mui/material'
import { DropzoneAreaBase } from 'material-ui-dropzone';

const Meme = () => {
    return (
        <>
            <Box id="custombox2">
                <h2 id='boxheader'>Meme Analysis</h2>
                <DropzoneAreaBase id="dropbox"
                    onAdd={(fileObjs) => console.log('Added Files:', fileObjs)}
                    onDelete={(fileObj) => console.log('Removed File:', fileObj)}
                    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                />
                <h5 style={{ textAlign: "center", paddingTop: "30px", fontWeight: "400" }} >(For File Upload only png,jpeg format files are accepted)</h5>
            </Box>
            <div id='tex' style={{ display: "flex", position: "absolute" }}>
                <img style={{ width: "350px", paddingTop: "10%" }} src={img1} alt="img" />
                <img style={{ width: "350px", height: "160px", paddingTop: "1%", paddingLeft: "120%" }} src={img2} alt="img" />
            </div>
        </>
    )
}

export default Meme