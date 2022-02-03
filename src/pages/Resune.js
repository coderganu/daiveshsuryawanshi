import React,{useState} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

const Resume = () => {

    return (
        <>

<div className="container-fluid">

<iframe src="https://drive.google.com/file/d/1OK0Xj6JNbfxb4lAF0pu-lf7cQGdpfB4m/preview" width="100%" height="680" allow="autoplay"></iframe>
</div>

        </>
    )
}

export default Resume;