import '../../styles/video.css'
import React from 'react'

const Video = ({ video }) => {
  return (
    <video autoPlay={true} loop={true} muted={true}>
      <source src={video} type="video/mp4" />
    </video>
  )
}

export default Video
