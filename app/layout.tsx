import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'OBD Diagnostic - Analyse et codes erreurs voiture | OBD-Diagnostic.fr',
    template: '%s | OBD-Diagnostic.fr',
  },
  description:
    'Comprenez la signification de chaque code OBD2, identifiez la cause de votre voyant moteur et découvrez les solutions adaptées. Guide complet du diagnostic automobile.',
  keywords: [
    'OBD',
    'OBD2',
    'diagnostic voiture',
    'code erreur',
    'voyant moteur',
    'valise OBD',
    'lecteur OBD',
    'diagnostic moteur',
    'code défaut',
    'panne voiture',
  ],
  authors: [{ name: 'OBD-Diagnostic.fr' }],
  creator: 'OBD-Diagnostic.fr',
  publisher: 'OBD-Diagnostic.fr',
  metadataBase: new URL('https://obd-diagnostic.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://obd-diagnostic.fr',
    siteName: 'OBD-Diagnostic.fr',
    title: 'OBD Diagnostic - Analyse et codes erreurs voiture',
    description:
      'Comprenez la signification de chaque code OBD2, identifiez la cause de votre voyant moteur et découvrez les solutions adaptées.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OBD-Diagnostic.fr - Diagnostic automobile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBD Diagnostic - Analyse et codes erreurs voiture',
    description:
      'Comprenez la signification de chaque code OBD2, identifiez la cause de votre voyant moteur et découvrez les solutions adaptées.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // À compléter avec vos codes de vérification
    // google: 'votre-code-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
