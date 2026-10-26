const QA = [
  ['Do you host the bot?', 'Yes, on our servers with uptime monitoring, or we hand you the source and help you host it yourself.'],
  ['Can you work on my existing FiveM server?', 'Yes. We work on QBCore, ESX and standalone servers. We start with a read-through of your resources and tell you what is worth keeping.'],
  ['Do I own the code?', 'Custom work is yours once it is paid for. Shared libraries we reuse across projects stay ours, and you get a licence to use them.'],
  ['How does the raid shield decide what is a raid?', 'It watches the rate of joins, account age, mass mentions and webhook spam. You set the thresholds; it locks down when they are crossed and tells your staff.'],
  ['How do I pay?', 'Half up front and half on launch, for anything over $100. Smaller jobs are paid up front.'],
  ['What happens after launch?', 'Every plan includes a support window for fixes. After it, you can keep us on a monthly plan or call us per job.'],
  ['Can you build a web dashboard for my bot?', 'Yes. Members log in with Discord and staff manage settings, logs and tickets from the browser.'],
  ['How long does a full FiveM server take?', 'Usually two to four weeks, depending on how many custom scripts and interiors it needs.'],
]

export default function Faq() {
  return (
    <section id="faq" className="chapter faq" data-ink="light">
      <h2 className="faq-title" data-reveal>Questions.</h2>
      <div className="faq-list">
        {QA.map(([q, a], i) => (
          <details key={q} name="faq" className="faq-item" open={i === 0} data-reveal>
            <summary>
              {q}
              <span className="plus" aria-hidden="true"><i /><i /></span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
