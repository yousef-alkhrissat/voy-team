import { useEffect, useState } from 'react'
import { DISCORD_INVITE } from './config.js'

// The header takes the ink of whichever chapter sits under its top edge.
export default function Header() {
  const [ink, setInk] = useState('light')
  const [ground, setGround] = useState('')

  useEffect(() => {
    const chapters = document.querySelectorAll('[data-ink]')
    // A split chapter (pricing) has no ground of its own; use its first field.
    const take = (ch) => {
      setInk(ch.dataset.ink)
      let bg = getComputedStyle(ch).backgroundColor
      if (bg === 'rgba(0, 0, 0, 0)' && ch.firstElementChild) {
        bg = getComputedStyle(ch.firstElementChild).backgroundColor
      }
      setGround(bg)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) take(e.target)
        })
      },
      { rootMargin: '0px 0px -96% 0px' },
    )
    chapters.forEach((c) => io.observe(c))
    // Shield flips its own ink when toggled.
    const mo = new MutationObserver(() => {
      const hit = document.elementsFromPoint(window.innerWidth / 2, 40)
      const ch = hit.map((el) => el.closest('[data-ink]')).find(Boolean)
      // Wait for the chapter's own colour transition before reading its ground.
      if (ch) setTimeout(() => take(ch), 460)
    })
    chapters.forEach((c) => mo.observe(c, { attributes: true, attributeFilter: ['data-ink'] }))
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <header className={`site-header ink-${ink}`} style={{ backgroundColor: ground }}>
      <a className="wordmark" href="#top" aria-label="Voy Team, back to top">
        <img src="/logo.jpg" width="40" height="40" alt="" />
        <span>Voy Team</span>
      </a>
      <nav className="site-nav" aria-label="Main">
        <a href="#discord">Discord</a>
        <a href="#fivem">FiveM</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="btn btn-header" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
        Join the Discord
      </a>
    </header>
  )
}
