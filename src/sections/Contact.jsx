import { CONTACT_EMAIL, DISCORD_INVITE } from '../config.js'

const STRIP = [
  ['/img/downtown-los-angeles-and-110-freeway.jpg', 'Freeway into downtown at night'],
  ['/img/jolly-roger-flag-tall-ships-race-aalborg.jpg', 'Skull flag on a ship'],
  ['/img/view-from-behind-hollywood-sign-overlooking-la.jpg', 'City from behind the hillside sign'],
  ['/img/la-river-at-710-night-aerial.jpg', 'City at night from the air'],
  ['/img/venice-beach-los-angeles-ca-01.jpg', 'Beach boardwalk'],
  ['/img/los-angeles-skyline-telephoto-2.jpg', 'Downtown towers'],
]

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = f.get('name')
    const handle = f.get('handle')
    const subject = `New project from ${name}`
    const body = `Name: ${name}\nDiscord: ${handle}\n\nWhat I need:\n`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="chapter contact" data-ink="light">
      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...STRIP, ...STRIP].map(([src], i) => (
            <img key={i} src={src} alt="" loading="lazy" className={`r${i % 3}`} />
          ))}
        </div>
      </div>
      <div className="contact-body">
        <h2 data-reveal>Open a ticket.</h2>
        <form className="cells" onSubmit={onSubmit} data-reveal>
          <label>
            <span className="sr">Your name</span>
            <input name="name" required placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            <span className="sr">Discord username</span>
            <input name="handle" required placeholder="Discord username" />
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="cells-notes">
          <p>We answer within a day, usually in your DMs.</p>
          <p>
            Rather talk now? <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">Join the Discord</a>
          </p>
        </div>
      </div>
    </section>
  )
}
