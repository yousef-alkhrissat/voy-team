const STAGES = [
  { time: 'Ten minutes', grow: 1, cls: 's-red', text: 'First, open a ticket and tell us about your server.' },
  { time: 'A day', grow: 1.6, cls: 's-bone', text: 'Then a written plan and a fixed quote.' },
  { time: 'One to three weeks', grow: 6, cls: 's-ember', text: 'Next, we build it on a test copy of your server.' },
  { time: 'A week', grow: 2.4, cls: 's-ink', text: 'Finally, launch with us on call and tune it live.' },
]

export default function Process() {
  return (
    <section id="process" className="chapter process" data-ink="light">
      <h2 className="process-title" data-reveal>From ticket to live.</h2>
      <ol className="bar" data-ui>
        {STAGES.map((s) => (
          <li key={s.time} className="bar-stage" style={{ flexGrow: s.grow, '--g': s.grow }} data-reveal>
            <div className={`bar-seg ${s.cls}`}>{s.time}</div>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
