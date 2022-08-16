import React from 'react'
import Video from '../../Components/Video/Video'
import Header from '../../Components/Header/Header'
import '../../styles/home.css'
import NewEmployeeForm from '../../Components/NewEmployeeForm/NewEmployeeForm'
import infographic from '../Home/info-graphic.mp4'

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
