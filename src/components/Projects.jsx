import { projects } from '../data/profile.js';

export default function Projects() {
  return (
    <section className="block" id="projects" aria-labelledby="proj-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="proj-title">Side projects</h2>
          <p>Smaller builds where I tried out state patterns before using them at work.</p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article className="proj" key={p.name}>
              <p className="stack">{p.stack}</p>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              {p.repo && <a className="repo" href={p.repo} target="_blank" rel="noreferrer">View code on GitHub</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
