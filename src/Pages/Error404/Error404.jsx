// REACT
import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Video from '../../Components/Video/Video'

// MEDIA
import errorVideo from './error-video.mp4'

// CSS
import '../../styles/error404.css'

const Error404 = () => {
  document.title = 'HRnet - Error 404'
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

export default Error404
