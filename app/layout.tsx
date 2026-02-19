import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { JsonLd, organizationSchema, websiteSchema } from '@/components/JsonLd';

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
    languages: {
      'fr': 'https://obd-diagnostic.fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://obd-diagnostic.fr',
    siteName: 'OBD-Diagnostic.fr',
    title: 'OBD Diagnostic - Analyse et codes erreurs voiture',
    description:
      'Comprenez la signification de chaque code OBD2, identifiez la cause de votre voyant moteur et découvrez les solutions adaptées.',
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
    // IMPORTANT : Ajoutez votre code de verification Google Search Console ici
    // 1. Allez sur https://search.google.com/search-console
    // 2. Ajoutez la propriete obd-diagnostic.fr
    // 3. Choisissez la methode "Balise HTML"
    // 4. Copiez le code content="XXXXX" et collez-le ci-dessous
    // google: 'VOTRE_CODE_VERIFICATION_GSC',
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
        {/* Schema.org : Organisation + Site Web (donnees structurees globales) */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
