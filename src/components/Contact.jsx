import { useState } from 'react';
import { useLang } from '../i18n.jsx';
import { contact } from '../content.js';
import { Reveal, RevealLine } from '../motion/Reveal.jsx';
import { Magnetic } from '../motion/Magnetic.jsx';
import { SectionLabel } from './SectionLabel.jsx';
import './Contact.css';

export function Contact() {
  const { t } = useLang();
  const [line1, line2] = t(contact.title);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to a backend / email service here.
    console.log('Quote request:', form);
    setSent(true);
  };

  const details = [
    { label: contact.labels.email, value: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
    { label: contact.labels.phone, value: <span className="pre-line">{contact.phones}</span> },
    { label: contact.labels.address, value: t(contact.address) },
    { label: contact.labels.web, value: <a href={contact.web.href}>{contact.web.display}</a> },
  ];

  return (
    <section id="contact" className="contact">
      <div data-parallax="0.1" className="slash contact__slash" />

      <div className="contact__info">
        <SectionLabel number="06" text={contact.label} className="contact__label" />
        <h2 className="contact__title">
          <RevealLine>{line1}</RevealLine>
          <RevealLine delay={100}>{line2}</RevealLine>
        </h2>
        <Reveal as="a" href={contact.phoneMain.href} className="contact__phone">
          {contact.phoneMain.display}
        </Reveal>

        <div className="contact__details">
          {details.map((d, i) => (
            <Reveal key={i} delay={i * 80} className="contact__detail">
              <span className="contact__detail-label">{t(d.label)}</span>
              <span className="contact__detail-value">{d.value}</span>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal as="form" delay={200} className="quote" onSubmit={handleSubmit}>
        <span className="quote__title">{t(contact.form.title)}</span>
        <input className="quote__field" placeholder={t(contact.form.name)} value={form.name} onChange={update('name')} />
        <input className="quote__field" placeholder={t(contact.form.phone)} value={form.phone} onChange={update('phone')} />
        <textarea
          className="quote__field quote__field--area"
          rows={3}
          placeholder={t(contact.form.message)}
          value={form.message}
          onChange={update('message')}
        />
        {sent ? (
          <div className="quote__thanks">
            <span className="quote__tick" />
            <span>{t(contact.form.thanks)}</span>
          </div>
        ) : (
          <Magnetic as="button" type="submit" className="quote__send">
            <span>{t(contact.form.send)}</span>
            <span>→</span>
          </Magnetic>
        )}
      </Reveal>
    </section>
  );
}
