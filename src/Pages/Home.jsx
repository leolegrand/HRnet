import React from 'react'
import Video from '../Components/Video/Video'
import Header from '../Components/Header/Header'
import '../styles/home.css'
import NewEmployeeForm from '../Components/NewEmployeeForm/NewEmployeeForm'

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <aside className="main__aside">
          <Video />
        </aside>
        <section className="main__form">
          <NewEmployeeForm />
        </section>
      </main>
    </>
  )
}

export default Home
