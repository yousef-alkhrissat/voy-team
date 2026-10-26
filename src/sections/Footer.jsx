import { CONTACT_EMAIL, DISCORD_INVITE } from '../config.js'

export default function Footer() {
  return (
    <footer className="chapter footer" data-ink="light">
      <p className="footer-name" aria-hidden="true">Voy Team</p>
      <div className="footer-row">
        <ul className="footer-places">
          <li><a href={DISCORD_INVITE} target="_blank" rel="noreferrer">Discord server</a></li>
          <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        </ul>
        <div className="footer-links">
          <div>
            <h3>Discord</h3>
            <a href="#discord">Bots</a>
            <a href="#discord">Server UI</a>
            <a href="#shield">Protection</a>
            <a href="#discord">Moderation</a>
          </div>
          <div>
            <h3>FiveM</h3>
            <a href="#fivem">Scripts</a>
            <a href="#fivem">NUI</a>
            <a href="#fivem">Mapping</a>
            <a href="#fivem">Setup</a>
          </div>
          <div>
            <h3>Team</h3>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          © 2026 Voy Team. Not affiliated with Discord, Rockstar Games or Cfx.re. Photographs: Camiloarenivar,
          Dicklyon, Michael E. Arth, BDS2006, Blake Everett and Malene Thyssen, via Wikimedia Commons (CC BY-SA / CC0).
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
