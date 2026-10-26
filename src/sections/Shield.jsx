import { useState } from 'react'

const LOG_ON = [
  ['#general', 'locked for @everyone'],
  ['Invites', 'paused for 30 minutes'],
  ['Join wave', '14 accounts kicked, all under 10 s old'],
  ['Staff', 'pinged in #mod-log'],
]

const LOG_OFF = [
  ['Server', 'open, invites live'],
  ['Watching', 'joins, mass pings, webhook spam'],
]

// The live thing: the switch a server owner reaches for when a raid lands.
export default function Shield() {
  const [on, setOn] = useState(false)
  const log = on ? LOG_ON : LOG_OFF

  return (
    <section
      id="shield"
      className={`chapter shield ${on ? 'is-on' : ''}`}
      data-ink={on ? 'light' : 'dark'}
    >
      <div className="shield-copy" data-reveal>
        <h2 className="shield-title">Lockdown is {on ? 'on.' : 'off.'}</h2>
        <p className="shield-lead">
          When a raid lands, one switch locks every channel, pauses invites and throws out the join
          wave. Flip it.
        </p>
        <ul className="shield-log" aria-live="polite" data-ui>
          {log.map(([k, v]) => (
            <li key={k}>
              <b>{k}</b> {v}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="toggle"
        role="switch"
        aria-checked={on}
        aria-label="Lockdown"
        onClick={() => setOn((v) => !v)}
        data-ui
      >
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        <span className="toggle-label">
          Lockdown <span className="toggle-value">{on ? 'On' : 'Off'}</span>
        </span>
      </button>
    </section>
  )
}
