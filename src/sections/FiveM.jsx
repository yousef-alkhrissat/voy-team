function Hud() {
  return (
    <div className="nui nui-hud" data-ui aria-hidden="true">
      <div className="hud-money">
        <span>$ 48,250</span>
        <span className="hud-bank">Bank $ 312,900</span>
      </div>
      <div className="hud-speed">
        <span className="hud-kmh">87</span>
        <span>mph</span>
      </div>
      <div className="hud-bars">
        <span style={{ '--v': 0.82 }}><i /></span>
        <span style={{ '--v': 0.45 }}><i /></span>
        <span style={{ '--v': 0.64 }}><i /></span>
      </div>
      <div className="hud-street">Vinewood Blvd · Alta</div>
    </div>
  )
}

function Phone() {
  return (
    <div className="nui nui-phone" data-ui aria-hidden="true">
      <div className="phone-time">21:47</div>
      <div className="phone-apps">
        <span>Messages</span>
        <span>Bank</span>
        <span>Garage</span>
        <span>Dispatch</span>
        <span>Social</span>
        <span>Jobs</span>
      </div>
      <div className="phone-note">
        <b>Dispatch</b> 10-31 in progress, Legion Square
      </div>
    </div>
  )
}

const TILES = [
  {
    cls: 'w-a',
    name: 'Jobs, police and traffic scripts',
    cat: 'Lua scripts',
    img: ['/img/downtown-los-angeles-and-110-freeway.jpg', 1920, 2119, 'Night traffic on a freeway heading into a downtown skyline'],
  },
  { cls: 'w-b', name: 'Custom HUD', cat: 'NUI', ui: <Hud /> },
  {
    cls: 'w-c',
    name: 'Setup, OneSync and txAdmin',
    cat: 'Infrastructure',
    img: ['/img/la-river-at-710-night-aerial.jpg', 1512, 2054, 'A city grid at night seen from the air, a freeway running through it'],
  },
  { cls: 'w-d', name: 'Phone and inventory', cat: 'NUI', ui: <Phone /> },
  {
    cls: 'w-e',
    name: 'Maps and MLO interiors',
    cat: 'Mapping',
    img: ['/img/view-from-behind-hollywood-sign-overlooking-la.jpg', 1920, 915, 'Looking out over a sprawling city from behind the letters of a hillside sign'],
  },
  {
    cls: 'w-f',
    name: 'Anticheat and staff tools',
    cat: 'Protection',
    img: ['/img/los-angeles-skyline-telephoto-2.jpg', 1920, 1531, 'Downtown towers compressed together through a long lens'],
  },
]

export default function FiveM() {
  return (
    <section id="fivem" className="chapter fivem" data-ink="dark">
      <div className="work">
        <div className="work-head" data-reveal>
          <h2>FiveM servers.</h2>
          <p>
            QBCore, ESX or standalone. Lua scripts, NUI interfaces built in React, tuned resources
            and a server that stays up on a Saturday night.
          </p>
        </div>
        {TILES.map((t) => (
          <figure key={t.cls} className={`work-tile ${t.cls}`} data-reveal>
            <div className="work-media">
              {t.img ? (
                <img src={t.img[0]} width={t.img[1]} height={t.img[2]} alt={t.img[3]} loading="lazy" />
              ) : (
                t.ui
              )}
            </div>
            <figcaption>
              <span>{t.name}</span>
              <span>{t.cat}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
