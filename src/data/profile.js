// All page content lives here, so updating the portfolio means editing data, not components.
export const profile = {
  name: 'Neelakanta A',
  email: 'neelakantajohn@gmail.com',
  phone: '+91 74834 55260',
  phoneHref: 'tel:+917483455260',
  location: 'Bengaluru, Karnataka',
  github: 'https://github.com/neelakanta33',
  linkedin: '', // add your LinkedIn profile URL here to show the link
  openToWork: true,
};

export const role = {
  title: 'Frontend Developer',
  company: 'Tecnotree Convergence',
  period: 'Jul 2023 – present, Bengaluru',
  wins: [
    { lead: 'Designed a schema-driven journey card library.', text: 'Forms render from database-configured JSON schemas through one generic React host, with a declarative per-field payload mapping that builds the API request and reads it back to resume drafts.' },
    { lead: 'Migrated onboarding and Customer 360 cards onto it', text: 'with schema inheritance, changed-only updates and legacy fallbacks, guarded by JSON Schema contract validation and {340+ Jest tests}.' },
    { lead: 'Refactored legacy class components', text: 'into a modular structure with Context API, removing {4,200 lines} of duplicate code and cutting delivery time for new screens by {35%}.' },
    { lead: 'Centralized Redux state', text: 'for large multi-step workflows, cutting state-related production bugs by {30%}.' },
    { lead: 'Standardized form validation with Formik', text: 'across all 12 modules, reducing form-related production defects by {25%}.' },
    { lead: 'Led SonarQube remediation', text: 'across the shared codebase, resolving {600+} critical and major issues.' },
    { lead: 'Built a bulk “Select Offer” flow', text: 'driven by master data, and shipped bi-weekly releases through Jenkins and Rancher.' },
  ],
};

export const projects = [
  {
    name: 'Fitness Fit',
    stack: 'React, Redux',
    repo: 'https://github.com/neelakanta33/Fitnesss',
    text: 'A gym management app for customer records and workout planning, with a dynamic workout builder and a BMI calculator. State is split into domain-specific reducers so updates stay predictable as features grow.',
  },
  {
    name: 'Library Management System',
    stack: 'React, Node.js, MongoDB',
    repo: 'https://github.com/neelakanta33/libraryManagementSystem',
    text: 'A full-stack CRUD app for a book catalogue with client-side search and filtering. Shared data lives in lifted component state rather than a global store, on purpose.',
  },
];

// Second item `true` marks what I’m currently building with
export const skills = [
  { group: 'Languages', items: [['JavaScript (ES6+)'], ['TypeScript', true], ['HTML5'], ['CSS3'], ['SQL']] },
  { group: 'Frameworks and libraries', items: [['React (Hooks, Context)'], ['Redux / RTK'], ['Next.js App Router', true], ['React Query'], ['Formik'], ['RJSF'], ['Material UI'], ['Tailwind CSS'], ['Node.js']] },
  { group: 'Testing and quality', items: [['Jest'], ['React Testing Library', true], ['SonarQube'], ['ESLint'], ['Prettier']] },
  { group: 'Delivery', items: [['Git / GitHub'], ['Jenkins'], ['Rancher'], ['Docker'], ['Vite'], ['Webpack'], ['Postman'], ['Jira']] },
  { group: 'Practices', items: [['Schema-driven UI'], ['JSON Schema'], ['REST integration'], ['Core Web Vitals'], ['WCAG accessibility'], ['Code review']] },
  { group: 'AI-assisted development', items: [['Claude Code'], ['Legacy refactors'], ['Codebase exploration']], note: 'Generated code goes through the same review and SonarQube gates as hand-written code.' },
];

export const education = [
  { title: 'B.E., Electronics and Communication', text: 'Ballari Institute of Technology and Management, 2018 – 2022. CGPA 8.16/10.' },
  { title: 'Full-Stack Web Development', text: 'Certified training in HTML, CSS, JavaScript, React, Node.js and SQL.' },
];
