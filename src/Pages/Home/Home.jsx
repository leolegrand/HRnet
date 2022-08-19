// REACT
import React from 'react'

// COMPONENTS
import Video from '../../Components/Video/Video'
import Header from '../../Components/Header/Header'
import NewEmployeeForm from '../../Components/NewEmployeeForm/NewEmployeeForm'

// MEDIA
import infographic from '../Home/info-graphic.mp4'

// CSS
import '../../styles/home.css'

const Home = () => {
  document.title = 'HRnet - Create Employee'
  return (
    <>
      <Header page={'home'} />
      <main className="main">
        <aside className="main__aside">
          <Video video={infographic} />
        </aside>
        <section className="main__form">
          <NewEmployeeForm />
        </section>
      </main>
    </>
  )
}

export default Home
