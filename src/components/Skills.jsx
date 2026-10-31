import { education, skills } from '../data/profile.js';

export default function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="skills-title">Toolkit</h2>
          <p>What I use every day, plus what I’m building with right now.</p>
        </div>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map(([name, now]) => <li key={name} className={now ? 'now' : undefined}>{name}</li>)}
              </ul>
              {g.note && <p className="note">{g.note}</p>}
            </div>
          ))}
        </div>
        <p className="legend"><i aria-hidden="true" /> Currently building with</p>
        <div className="edu">
          {education.map((e) => (
            <div key={e.title}><h3>{e.title}</h3><p>{e.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
