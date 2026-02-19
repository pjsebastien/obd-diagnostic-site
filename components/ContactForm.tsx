'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Ici, vous pouvez integrer votre logique d'envoi d'email
    // Par exemple : appel a une API, service tiers (FormSubmit, EmailJS, etc.)

    // Simulation d'envoi
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-br from-carbon-900 to-carbon-950 border border-carbon-800 rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-2xl">📧</span>
        Envoyez-nous un message
      </h2>

      {status === 'success' && (
        <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-green-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-green-500 font-semibold mb-1">Message envoye avec succes !</h3>
              <p className="text-green-500/80 text-sm">
                Nous avons bien recu votre message et vous repondrons dans les plus brefs delais.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-red-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-red-500 font-semibold mb-1">Erreur d&apos;envoi</h3>
              <p className="text-red-500/80 text-sm">{errorMessage || 'Une erreur est survenue. Veuillez reessayer.'}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Nom ou pseudonyme <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-carbon-950 border border-carbon-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:ring-2 focus:ring-mechanic-500 focus:border-transparent transition-all"
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Adresse e-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-carbon-950 border border-carbon-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:ring-2 focus:ring-mechanic-500 focus:border-transparent transition-all"
            placeholder="votre@email.com"
          />
        </div>

        {/* Sujet */}
        <div>
          <label htmlFor="subject" className="block text-white font-medium mb-2">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-carbon-950 border border-carbon-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-mechanic-500 focus:border-transparent transition-all"
          >
            <option value="">Selectionnez un sujet</option>
            <option value="question">Question generale</option>
            <option value="code">Question sur un code OBD</option>
            <option value="erreur">Signaler une erreur</option>
            <option value="suggestion">Suggestion d&apos;amelioration</option>
            <option value="partenariat">Partenariat</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-carbon-950 border border-carbon-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:ring-2 focus:ring-mechanic-500 focus:border-transparent transition-all resize-none"
            placeholder="Decrivez votre demande..."
          />
        </div>

        {/* RGPD */}
        <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
          <p className="text-carbon-400 text-sm">
            En soumettant ce formulaire, vous acceptez que vos donnees soient utilisees pour traiter votre demande
            conformement a notre{' '}
            <a href="/politique-confidentialite" className="text-mechanic-500 hover:text-mechanic-400">
              politique de confidentialite
            </a>
            .
          </p>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2 bg-mechanic-600 hover:bg-mechanic-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-mechanic-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
