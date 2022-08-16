import React from 'react'
import Video from '../../Components/Video/Video'
import '../../styles/error404.css'
import errorVideo from './error-video.mp4'
import { Link } from 'react-router-dom'

const error404 = () => {
  return (
    <>
      <Video video={errorVideo} />
      <div className="error-message">
        <h2 className="error-message__title">ERROR 404</h2>
        <Link className="error-message__link" to={'/employee'}>
          Back to employees
        </Link>
      </div>
    </>
  )
}

export default error404
