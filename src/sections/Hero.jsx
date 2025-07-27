import React, { useRef } from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import Heroexp from '../components/Heromodels/Heroexp.jsx';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import AniCounter from '../components/AniCounter.jsx';

const Hero = () => {
  const heroRef = useRef();
  const wordsRef = useRef();

  useGSAP(() => {
    // Main title animation
    gsap.fromTo('.hero-text h1', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.3, 
        duration: 1, 
        ease: 'power3.inOut' 
      }
    );

    // Words slider animation
    gsap.fromTo(wordsRef.current.querySelectorAll('span span'), 
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1)',
        delay: 0.5
      }
    );

    // Button animation
    gsap.fromTo('#hero-button', 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        delay: 1.2,
        ease: 'elastic.out(1, 0.5)' 
      }
    );
  }, { scope: heroRef });

  return (
    <section id="hero" className="relative overflow-hidden" ref={heroRef}>
      <div className='absolute top-0 left-0 z-10'>
        <img 
          src="/images/bg.png" 
          alt="Decorative background pattern" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className='hero-layout'>
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1 className="leading-tight">
                Shaping
                <span className='slide block h-16 overflow-hidden'>
                  <span className='wrapper' ref={wordsRef}>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img 
                          src={word.imgPath}
                          alt={word.text + " icon"}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white' 
                          loading="lazy"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results.</h1>
            </div>
            
            <p className="text-white/70 md:text-xl relative z-10">
              Hi, I'm Austin, a developer based in India with interest in Solving Real World Problems.
            </p>
            
            <Button 
              className="md:w-80 md:h-16 w-60 h-12"
              id="hero-button"
              text="See my Work"
              aria-label="View my portfolio projects"
            />
          </div>
        </header>
        
        {/* 3D Model Section */}
        <figure aria-label="3D portfolio showcase">
          <div className='hero-3d-layout'>
            <Heroexp />
          </div>
        </figure>
      </div>
      <AniCounter />
    </section>
  );
};

export default Hero;