import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef(null);
  const navItemRefs = useRef([]);
  const contactBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    gsap.fromTo(
      [logoRef.current, ...navItemRefs.current, contactBtnRef.current],
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out'
      }
    );
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className='logo' href='#hero' ref={logoRef}>
          Austin | Sharma
        </a>
        <nav className='desktop'>
          <ul>
            {navLinks.map(({link, name}, index) => (
              <li 
                key={name} 
                className='group'
                ref={el => navItemRefs.current[index] = el}
              >
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'/>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href='#contact' className='contact-btn group' ref={contactBtnRef}>
          <div className='inner'>
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  )
}
export default Navbar;