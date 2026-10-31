import { profile } from '../data/profile.js';

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Got a product that needs to scale without rewrites?</h2>
        <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="row">
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
