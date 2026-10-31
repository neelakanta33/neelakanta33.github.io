const links = [
  ['#playground', 'Playground'],
  ['#work', 'Work'],
  ['#projects', 'Projects'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  return (
    <nav className="top" aria-label="Main">
      <a className="mark" href="#top">Neelakanta A</a>
      <ul>
        {links.map(([href, label]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
