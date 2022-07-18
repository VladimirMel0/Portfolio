import React from 'react'
import {BsLinkedin, BsWhatsapp, BsGithub} from 'react-icons/bs'

const HomeSocial = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/vladimir-mel0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/VladimirMel0" target="_blank"><BsGithub/></a>
        <a href="https://wa.me/5541984697883" target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HomeSocial