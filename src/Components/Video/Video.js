import '../../styles/video.css'
import React from 'react'

import infographic from './info-graphic.mp4'

const Video = () => {
  return (
    <video autoPlay={true} loop={true} muted={true}>
      <source src={infographic} type="video/mp4" />
    </video>
  )
}

export default Video
