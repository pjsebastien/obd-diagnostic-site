'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
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

    // Ici, vous pouvez intégrer votre logique d'envoi d'email
    // Par exemple : appel à une API, service tiers (FormSubmit, EmailJS, etc.)

    // Simulation d'envoi
    setTimeout(() => {
      // Simuler un succès pour la démonstration
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
    <div className="min-h-screen bg-carbon-950 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-carbon-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-white font-medium">Contact</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-carbon-300 leading-relaxed">
            Une question, une suggestion ou un problème ? N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
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
                      <h3 className="text-green-500 font-semibold mb-1">Message envoyé avec succès !</h3>
                      <p className="text-green-500/80 text-sm">
                        Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
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
                      <p className="text-red-500/80 text-sm">{errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}</p>
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
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question">Question générale</option>
                    <option value="code">Question sur un code OBD</option>
                    <option value="erreur">Signaler une erreur</option>
                    <option value="suggestion">Suggestion d&apos;amélioration</option>
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
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {/* RGPD */}
                <div className="bg-carbon-950 border border-carbon-800 rounded-lg p-4">
                  <p className="text-carbon-400 text-sm">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour traiter votre demande
                    conformément à notre{' '}
                    <Link href="/politique-confidentialite" className="text-mechanic-500 hover:text-mechanic-400">
                      politique de confidentialité
                    </Link>
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
          </div>

          {/* Informations latérales */}
          <div className="space-y-6">
            {/* Délai de réponse */}
            <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">⏱️</span>
                Délai de réponse
              </h3>
              <p className="text-carbon-300 text-sm">
                Nous nous engageons à répondre à votre demande dans un délai de{' '}
                <strong className="text-white">48 heures ouvrées</strong>.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">❓</span>
                Avant de nous écrire
              </h3>
              <p className="text-carbon-300 text-sm mb-3">
                Consultez nos pages d&apos;aide pour trouver rapidement une réponse :
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/codes-obd"
                    className="text-mechanic-500 hover:text-mechanic-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Liste des codes OBD
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className="text-mechanic-500 hover:text-mechanic-400 text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    À propos du site
                  </Link>
                </li>
              </ul>
            </div>

            {/* Autres moyens */}
            <div className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Bon à savoir
              </h3>
              <p className="text-carbon-300 text-sm">
                Pour toute question urgente concernant un problème mécanique, nous vous recommandons de consulter un
                professionnel qualifié.
              </p>
            </div>
          </div>
        </div>

        {/* Retour */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-carbon-800 hover:bg-carbon-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-carbon-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
