import React from 'react';
import './about.css';
import image from '../image/rockClimbing.JPG';
import bridgeImage from '../image/grandCanyonBridge.jpg';

function About() {
    return (
        <div className='page-container'>
            <div 
                className='about-container'>
                <div className='center' >
                    <img 
                    className='about-image'
                    src={bridgeImage}
                    alt='rockClimbing' />
                    </div>
                <p><span>about me</span> I'm baby yOLO swag vexillologist, echo park la croix tilde pitchfork master cleanse shabby chic humblebrag man braid actually williamsburg poke. Kogi vinyl literally activated charcoal. Lo-fi typewriter fashion axe neutra, semiotics yuccie franzen pabst vice lumbersexual quinoa. Artisan marfa pok pok chartreuse chia asymmetrical yr, tousled fingerstache seitan keytar. Adaptogen lyft meh, kitsch pinterest jianbing everyday carry you probably haven't heard of them roof party four dollar toast celiac. Shaman raw denim taiyaki enamel pin man bun authentic flannel. Occupy man braid direct trade tbh deep v selfies humblebrag gastropub succulents adaptogen ugh church-key.
                </p>
                <p><span>About site</span> I'm baby yOLO swag vexillologist, echo park la croix tilde pitchfork master cleanse shabby chic humblebrag man braid actually williamsburg poke. Kogi vinyl literally activated charcoal. Lo-fi typewriter fashion axe neutra, semiotics yuccie franzen pabst vice lumbersexual quinoa. Artisan marfa pok pok chartreuse chia asymmetrical yr, tousled fingerstache seitan keytar. Adaptogen lyft meh, kitsch pinterest jianbing everyday carry you probably haven't heard of them roof party four dollar toast celiac. Shaman raw denim taiyaki enamel pin man bun authentic flannel. Occupy man braid direct trade tbh deep v selfies humblebrag gastropub succulents adaptogen ugh church-key.
                </p>
                <div className='center' >
                  <img 
                    className='about-image-2'
                    src={image}
                    alt='rockClimbing' />
                </div>
                    </div>
                </div>
    )
}

export default About
