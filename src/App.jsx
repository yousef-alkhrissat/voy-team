import { useEffect } from 'react'
import Header from './Header.jsx'
import Hero from './sections/Hero.jsx'
import Shield from './sections/Shield.jsx'
import Discord from './sections/Discord.jsx'
import FiveM from './sections/FiveM.jsx'
import Process from './sections/Process.jsx'
import Pricing from './sections/Pricing.jsx'
import Faq from './sections/Faq.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

// Reveal each [data-reveal] element once as it scrolls in; content stays visible without script.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    // Stagger siblings so a section's parts arrive one after another.
    els.forEach((el) => {
      const sibs = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'))
      el.style.transitionDelay = `${(sibs.indexOf(el) % 6) * 75}ms`
    })
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Shield />
        <Discord />
        <FiveM />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
