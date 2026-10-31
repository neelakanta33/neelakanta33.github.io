import { useEffect, useMemo, useRef, useState } from 'react';
import { presets } from '../data/presets.js';
import { buildPayload, defaultsFor, highlightJson, parseSchema } from '../utils/schema.js';
import SchemaForm from './SchemaForm.jsx';

const toText = (s) => JSON.stringify(s, null, 2);

export default function Playground() {
  const [active, setActive] = useState('personal');
  const [text, setText] = useState(() => toText(presets.personal.schema));
  const [schema, setSchema] = useState(presets.personal.schema);
  const [error, setError] = useState('');
  const [values, setValues] = useState(() => defaultsFor(presets.personal.schema.fields));
  const [formKey, setFormKey] = useState(0);
  const hlRef = useRef(null);
  const taRef = useRef(null);

  // Debounced parse: keep the last valid card on screen while the JSON is broken.
  useEffect(() => {
    const t = setTimeout(() => {
      const res = parseSchema(text);
      if (res.error) {
        setError(res.error);
        return;
      }
      setError('');
      setSchema(res.schema);
      setValues((v) => ({ ...defaultsFor(res.schema.fields), ...v }));
    }, 180);
    return () => clearTimeout(t);
  }, [text]);

  const loadPreset = (name) => {
    const s = presets[name].schema;
    setActive(name);
    setText(toText(s));
    setSchema(s);
    setError('');
    setValues(defaultsFor(s.fields));
    setFormKey((k) => k + 1);
    if (taRef.current) taRef.current.scrollTop = 0;
  };

  const syncScroll = () => {
    if (!hlRef.current || !taRef.current) return;
    hlRef.current.scrollTop = taRef.current.scrollTop;
    hlRef.current.scrollLeft = taRef.current.scrollLeft;
  };

  const highlighted = useMemo(() => highlightJson(text), [text]);
  const payload = useMemo(() => buildPayload(schema.fields, values), [schema, values]);
  const count = (schema.fields || []).length;

  return (
    <section className="block" id="playground" aria-labelledby="pg-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="pg-title">Edit the schema. Watch the screen.</h2>
          <p>
            A small version of the idea behind my journey card library at work. Each field declares where its value
            lands in the API request, so the same config renders the form and builds the payload. Change a label, add a
            field, break the JSON and see what happens.
          </p>
        </div>
        <div className="play">
          <div className="editor">
            <div className="tabs" role="tablist" aria-label="Example schemas">
              {Object.entries(presets).map(([name, p]) => (
                <button key={name} role="tab" aria-selected={active === name} onClick={() => loadPreset(name)}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="code-area">
              <pre aria-hidden="true" ref={hlRef} dangerouslySetInnerHTML={{ __html: highlighted }} />
              <textarea
                ref={taRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onScroll={syncScroll}
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                aria-label="Card schema as JSON"
              />
            </div>
            <div className={`editor-foot${error ? ' err' : ''}`} role="status" aria-live="polite">
              {error
                ? `${error}. The last valid card stays on screen.`
                : `Valid schema, ${count} field${count === 1 ? '' : 's'} rendered`}
            </div>
          </div>
          <div className="render">
            <SchemaForm
              key={formKey}
              schema={schema}
              values={values}
              onChange={(key, v) => setValues((prev) => ({ ...prev, [key]: v }))}
            />
            <div className="payload">
              <h4>Request payload <span>built from each field’s "map"</span></h4>
              <pre>{JSON.stringify(payload, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
