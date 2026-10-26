export default function Discord() {
  return (
    <section id="discord" className="chapter discord" data-ink="light">
      <div className="mosaic">
        <div className="tile t-head" data-reveal>
          <h2>Built for Discord.</h2>
          <p>
            Bots, interfaces, protection and moderation, made for one server at a time and written
            around how your community actually runs.
          </p>
        </div>

        <figure className="tile t-photo" data-reveal>
          <img
            src="/img/jolly-roger-flag-tall-ships-race-aalborg.jpg"
            width="1005"
            height="1500"
            alt="A black skull-and-crossbones flag flying from the bow of a tall ship"
            loading="lazy"
          />
        </figure>

        <div className="tile t-figure" data-reveal>
          <p className="figure-num">5 / 10s</p>
          <p>Joins that trip the raid shield by default. Set it to your server's pace.</p>
        </div>

        <div className="tile t-list" data-reveal>
          <h3>Commands we ship most</h3>
          <ul>
            <li>/ticket</li>
            <li>/verify</li>
            <li>/warn</li>
            <li>/giveaway</li>
          </ul>
        </div>

        <div className="tile t-s1" data-reveal>
          <h3>Bots</h3>
          <p>
            Tickets, verification, levels, economy and logging in discord.js or discord.py. Hosted by
            us or handed over with the source.
          </p>
        </div>

        <div className="tile t-s2" data-reveal>
          <h3>Server UI</h3>
          <p>Embeds, buttons, modals and web dashboards in your colours.</p>
        </div>

        <div className="tile t-s3" data-reveal>
          <h3>Moderation</h3>
          <p>AutoMod rules, warn ladders and staff logs your mods will read.</p>
        </div>
      </div>
    </section>
  )
}
