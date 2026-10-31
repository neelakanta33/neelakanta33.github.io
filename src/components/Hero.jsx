import photo from '../assets/photo.jpg';
import { profile } from '../data/profile.js';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div>
        <h1>
          <span>Screens that ship</span>
          <span className="thin">as configuration.</span>
        </h1>
        <p className="lede">I’m Neelakanta, a frontend developer building React interfaces for enterprise telecom at Tecnotree.</p>
        <p className="meta">
          Three years turning legacy code into reusable component libraries, most recently a schema-driven form
          engine where a new screen is a JSON file, not a pull request.
        </p>
        <div className="actions">
          <a className="btn solid" href="#playground">Try the form engine</a>
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
        </div>
      </div>
      <figure className="portrait">
        <div className="sun" aria-hidden="true" />
        <div className="frame">
          <img src={photo} alt="Neelakanta A in a white linen shirt against a sunlit wall" width="290" height="430" />
        </div>
        <figcaption>
          <span>Bengaluru, India</span>
          {profile.openToWork && <span className="status">Open to new roles</span>}
        </figcaption>
      </figure>
    </header>
  );
}
