import React, { useRef } from 'react';
import Titleheader from '../components/Titleheader';
import { techStackIcons } from '../constants';
import TechIcon from '../components/Models/TechLogos/TechIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo('.tech-card', 
      { y: 50, opacity: 0, visibility: 'hidden' },
      {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: container });

  return (
    <div ref={container} id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <Titleheader
          title="Tech Stack"
          sub="⚡ Technologies I have worked With"
        />
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div 
              key={icon.name} 
              className='tech-card card-border overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-animated-bg'/>
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon}/>
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;