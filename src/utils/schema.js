export function setPath(obj, path, value) {
  const parts = String(path).split('.');
  let node = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (typeof node[parts[i]] !== 'object' || node[parts[i]] === null) node[parts[i]] = {};
    node = node[parts[i]];
  }
  node[parts[parts.length - 1]] = value;
  return obj;
}

/** Build the request payload from field values using each field's `map` path. */
export function buildPayload(fields = [], values = {}) {
  const payload = {};
  fields.forEach((f) => {
    if (!f || !f.key) return;
    let v = values[f.key];
    if (v === undefined || v === '') return;
    if (f.type === 'number') v = Number(v);
    setPath(payload, f.map || f.key, v);
  });
  return payload;
}

/** Initial values from field defaults. */
export function defaultsFor(fields = []) {
  const out = {};
  (fields || []).forEach((f) => {
    if (f && f.key && f.default !== undefined) out[f.key] = f.default;
  });
  return out;
}

/** Returns an error message for a field value, or '' when valid. */
export function validateField(f, v) {
  if (f.required && (v === undefined || v === '')) return 'Required';
  if (v && f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) return 'Enter an email like name@example.com';
  if (v && f.pattern) {
    try {
      if (!new RegExp(f.pattern).test(v)) return f.hint ? `Use ${f.hint}` : 'Doesn’t match the pattern';
    } catch {
      /* invalid pattern in schema: skip */
    }
  }
  return '';
}

/** Parse schema text. Returns { schema } or { error } with a line number when possible. */
export function parseSchema(text) {
  try {
    const s = JSON.parse(text);
    if (typeof s !== 'object' || s === null || Array.isArray(s)) {
      throw new Error('The schema must be a JSON object with a "fields" list');
    }
    if (s.fields !== undefined && !Array.isArray(s.fields)) throw new Error('"fields" must be a list');
    return { schema: s };
  } catch (e) {
    let msg = String(e.message || e);
    const pos = /position (\d+)/.exec(msg);
    if (pos) {
      const line = text.slice(0, Number(pos[1])).split('\n').length;
      msg = `Line ${line}: ` + msg.replace(/\s*\(line.*$/, '').replace(/ in JSON at position \d+.*/, '');
    }
    return { error: msg };
  }
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Minimal JSON syntax highlighter for the editor overlay. */
export function highlightJson(text) {
  return (
    esc(text).replace(
      /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null|-?\d+(?:\.\d+)?)\b|([{}[\],])/g,
      (m, str, colon, lit, p) => {
        if (str) return colon ? `<span class="tok-k">${str}</span><span class="tok-p">${colon}</span>` : `<span class="tok-s">${str}</span>`;
        if (lit) return `<span class="tok-n">${lit}</span>`;
        return `<span class="tok-p">${p}</span>`;
      }
    ) + '\n'
  );
}
