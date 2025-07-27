import React from 'react';
import {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {

     const projects = [project1Ref.current,project2Ref.current,project3Ref.current];

    projects.forEach((card,index) =>{
        gsap.fromTo(
            card,
            {
                y:50, opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                delay:0.3 * (index + 1),
                scrollTrigger:{
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }
        )
    })
   gsap.fromTo(sectionRef.current,
    {opacity: 0},
    {opacity: 1, duration: 1.5}
   )
    },{});

  return (
    <section id='work' ref = {sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          
          {/* ===== LEFT SIDE - FEATURED PROJECT ===== */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className="image-wrapper">
              <img src='/images/project1.png' alt='Ryde' />
            </div>
            
            <div className='text-content'>
              <h2>
                Dynamic News Website with Age-based Content Censorship,ensuring 
                appropriate access to news articles.
              </h2>
              <p className='text-white-50 md:text-xl'>
                An Website built With HTML, CSS, Javascript with a clean and efficient UI.
              </p>
            </div>
          </div>

          {/*RIGHT SIDE - PROJECT LIST*/}
          <div className='project-list-wrapper overflow-hidden'>
            
            {/* Project 1 */}
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>  
                <img src="/images/project2.png" alt='Library Management' />
              </div>   
              <h2>Libra Management</h2> 
            </div>
            
            {/* Project 2 */}
            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffe7eb]'>  
                <img src="/images/project3.png" alt='Yc Direct' />
              </div>   
              <h2>Startup Showcase</h2> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;