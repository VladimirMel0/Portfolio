import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiBook} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça um pouco</h5>
      <h2>Sobre Mim</h2>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>5+ Anos em Vendas</small>
            </article>
            <article className='about__card'>
              <FiBook className='about__icon'/>
              <h5>Conhecimentos</h5>
              <small>Front-end - Mobile</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos Pessoais</h5>
              <small>7 Completos </small>
            </article>
          </div>
          <p>
          Olá, tudo bem?</p>
          <p>Prazer Sou o Vladimir, tenho 24 anos e tenho 5 anos em experiência em Vendas e Atendimento ao publico.</p>
          <p>Estou em processo de transição de carreira, tenho interesse em iniciar minha trajetoria em desenvolvimento front-end.</p>
         <p> Tenho alguns projetos pessoais, onde os usei para aprender e firmar conhecimentos em Html, Css, JavaScript e React.js.</p>
         <p>Tenho muito a Agregar em sua empresa, Podemos conversar para eu te explicar como?

          </p>
          <a href="#contact" className="btn btn-primary">Vamos Conversar</a>
        </div>
    </section>
  )
}

export default About