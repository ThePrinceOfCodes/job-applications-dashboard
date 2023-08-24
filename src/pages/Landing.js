import React from 'react'
import Logo from '../components/Logo'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
    return <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>
                    I'm baby small batch unicorn post-ironic prism gorpcore trust fund live-edge ramps stumptown 3 wolf moon ethical bicycle
                    rights crucifix mixtape. Single-origin coffee plaid kogi bodega boys YOLO retro. Tonx meditation roof party, hella irony
                    shabby chic selfies kogi schlitz microdosing chicharrones retro meggings. DSA iceland hoodie polaroid street art, af meggings
                    marfa bitters kombucha +1 kinfolk chicharrones JOMO hexagon.
                    Shabby chic whatever iceland, next level cronut plaid normcore godard synth dreamcatcher irony readymade gentrify hell of.
                    Grailed enamel pin selvage cold-pressed.
                </p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='main' className='img main-img'/>
        </div>
    </Wrapper>  
}

export default Landing