export default function Hero() {
  return (
    <section id="top" className="chapter hero" data-ink="light">
      <h1 className="hero-title">
        <span className="hero-l1">Discord</span>
        <span className="hero-l2">&amp; FiveM.</span>
      </h1>
      <img
        className="hero-mark"
        src="/logo.jpg"
        width="1179"
        height="1179"
        alt="The Voy Team skull, cracked, with fire in its eyes, inside a red ring"
      />
      <ul className="hero-services">
        <li><a href="#discord">Bots</a></li>
        <li><a href="#discord">Server UI</a></li>
        <li><a href="#shield">Protection</a></li>
        <li><a href="#discord">Moderation</a></li>
        <li><a href="#fivem">FiveM servers</a></li>
      </ul>
      <div className="hero-side">
        <p>
          Voy Team builds Discord bots, server interfaces, raid protection and moderation, and full
          FiveM servers for GTA V roleplay communities.
        </p>
        <a className="btn btn-dark" href="#contact">Start a project</a>
      </div>
    </section>
  )
}
