import { DISCORD_INVITE } from '../config.js'

export default function Pricing() {
  return (
    <section id="pricing" className="chapter pricing" data-ink="light" aria-label="Pricing">
      <div className="plan plan-discord" data-reveal>
        <h2>Discord</h2>
        <p className="plan-for">For communities that need a bot, a clean server and a shield.</p>
        <p className="plan-inc">
          A custom bot with up to ten commands, roles and channels laid out, AutoMod and the raid
          shield set up, and thirty days of fixes.
        </p>
        <div className="plan-foot">
          <p className="plan-price">$49<span>from</span></p>
          <a className="btn btn-dark" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
            Order Discord
          </a>
        </div>
      </div>
      <div className="plan plan-fivem" data-reveal>
        <h2>FiveM server</h2>
        <p className="plan-for">For roleplay servers going live, or fixing one that keeps falling over.</p>
        <p className="plan-inc">
          Framework install, txAdmin and OneSync, your core jobs, a custom HUD and phone, anticheat,
          a Discord bot linked to the server, and sixty days of support after launch.
        </p>
        <div className="plan-foot">
          <p className="plan-price">$299<span>from</span></p>
          <a className="btn btn-red" href={DISCORD_INVITE} target="_blank" rel="noreferrer">
            Order FiveM
          </a>
        </div>
      </div>
    </section>
  )
}
