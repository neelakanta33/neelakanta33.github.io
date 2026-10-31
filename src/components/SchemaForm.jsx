import { useState } from 'react';
import { validateField } from '../utils/schema.js';

function Field({ field, index, value, onChange }) {
  const [touched, setTouched] = useState(false);
  const id = `fld-${index}-${String(field.key).replace(/\W/g, '')}`;
  const error = touched ? validateField(field, value) : '';
  const wide = field.wide || field.type === 'toggle';

  if (field.type === 'toggle') {
    return (
      <div className="f wide">
        <label className="toggle">
          <input id={id} type="checkbox" checked={!!value} onChange={(e) => onChange(field.key, e.target.checked)} />
          {field.label || field.key}
        </label>
      </div>
    );
  }

  const common = {
    id,
    value: value ?? '',
    onChange: (e) => onChange(field.key, e.target.value),
    onBlur: () => setTouched(true),
    'aria-invalid': !!error,
    'aria-describedby': `${id}-hint`,
  };

  return (
    <div className={`f${wide ? ' wide' : ''}${error ? ' bad' : ''}`}>
      <label htmlFor={id}>
        {field.label || field.key}
        {field.required && <span className="req" aria-label="required">*</span>}
      </label>
      {field.type === 'select' ? (
        <select {...common}>
          <option value="">Choose…</option>
          {(field.options || []).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input {...common} type={['email', 'date', 'number'].includes(field.type) ? field.type : 'text'} />
      )}
      <span className="hint" id={`${id}-hint`}>{error || field.hint || ''}</span>
    </div>
  );
}

/** Generic host: renders any card schema into a form. */
export default function SchemaForm({ schema, values, onChange }) {
  const fields = (schema.fields || []).filter((f) => f && f.key);
  if (!fields.length) return <p className="empty">Add an item to "fields" to see it here.</p>;
  return (
    <div className="card">
      <h3>{schema.title || 'Untitled card'}</h3>
      {schema.description && <p className="desc">{schema.description}</p>}
      <div className="fields">
        {fields.map((f, i) => (
          <Field key={`${f.key}-${i}`} field={f} index={i} value={values[f.key]} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}
