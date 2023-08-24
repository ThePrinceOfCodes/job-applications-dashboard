import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
    return <Wrapper>
        <nav>
            <img src={logo} alt='logo'  className='logo'/>
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

const Wrapper = styled.main`
    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }

    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }

    h1 {
        font-weight: 700;
    }
    span{
        color: var(--primary-500);
    }

    p {
        color: var(--gray-600);
    }

    .main-img {
        display: none;
    }

    @media(min-width: 992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }

        .main-img {
            display: block;
        }
    }

`;

export default Landing