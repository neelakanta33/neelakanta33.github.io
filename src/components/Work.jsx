import { role } from '../data/profile.js';

// Text wrapped in {curly braces} in the data is rendered as a highlighted figure.
function withFigures(text) {
  return text.split(/(\{[^}]+\})/g).map((part, i) =>
    part.startsWith('{') ? <b key={i}>{part.slice(1, -1)}</b> : part
  );
}

export default function Work() {
  return (
    <section className="block" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="work-title">Work</h2>
          <p>
            One product suite, twelve customer-facing modules, eight enterprise and telco clients. Most of my work is
            making that suite easier to extend safely.
          </p>
        </div>
        <div className="role">
          <div className="who">
            <h3>{role.title}<br />{role.company}</h3>
            <p>{role.period}</p>
          </div>
          <ul className="wins">
            {role.wins.map((w) => (
              <li key={w.lead}><strong>{w.lead}</strong> {withFigures(w.text)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
