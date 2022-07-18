import React from 'react'
import './Home.css'
import CTA from './CTA'
import HomeSocial from './HomeSocial'
import Perfil from '../../Assets/Perfil.png'


const Home = () => {
  return (
    <header>
      <div className="container home__container">
        <h5> Olá, Eu Sou</h5>
        <h1>Vladimir Melo</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />


        <div className="me">
          <img src={Perfil} alt="Foto Perfil" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

        <HomeSocial/>

      </div>
    </header>
  )
}

export default Home