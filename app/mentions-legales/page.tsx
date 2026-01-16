import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales | OBD-Diagnostic.fr',
  description: 'Mentions légales du site OBD-Diagnostic.fr - Informations sur l\'éditeur, l\'hébergement et les conditions d\'utilisation.',
  alternates: {
    canonical: 'https://obd-diagnostic.fr/mentions-legales',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
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
            <li className="text-white font-medium">Mentions légales</li>
          </ol>
        </nav>

        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Mentions légales</h1>
          <p className="text-carbon-400 text-sm">Dernière mise à jour : Janvier 2026</p>
        </div>

        <div className="space-y-8">
          {/* Éditeur */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
            <div className="space-y-3 text-carbon-200">
              <p>
                <strong className="text-white">Nom du site :</strong> OBD-Diagnostic.fr
              </p>
              <p>
                <strong className="text-white">URL :</strong>{' '}
                <a href="https://obd-diagnostic.fr" className="text-mechanic-500 hover:text-mechanic-400">
                  https://obd-diagnostic.fr
                </a>
              </p>
              <p>
                <strong className="text-white">Responsable de publication :</strong> Sébastien P.
              </p>
              <p>
                <strong className="text-white">Contact :</strong>{' '}
                <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400">
                  Formulaire de contact
                </Link>
              </p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
            <div className="space-y-3 text-carbon-200">
              <p>
                <strong className="text-white">Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </p>
              <p>
                <strong className="text-white">Site web :</strong>{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mechanic-500 hover:text-mechanic-400"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                L&apos;ensemble du contenu présent sur le site <strong className="text-white">OBD-Diagnostic.fr</strong>{' '}
                (textes, graphismes, logo, images, etc.) est protégé par le droit d&apos;auteur et appartient à
                l&apos;éditeur du site ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite
                préalable de l&apos;éditeur.
              </p>
              <p>
                Les informations relatives aux codes OBD2 sont issues de normes publiques (ISO 15031-6 / SAE J2012) et de
                bases de données publiques. Ces informations sont mises à disposition à titre informatif uniquement.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation de responsabilité</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Les informations fournies sur <strong className="text-white">OBD-Diagnostic.fr</strong> le sont à titre{' '}
                <strong className="text-white">purement informatif</strong>. Elles ne constituent en aucun cas un conseil
                professionnel en mécanique automobile.
              </p>
              <p>
                L&apos;éditeur s&apos;efforce de fournir des informations aussi précises que possible, mais ne peut
                garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
              </p>
              <p>
                <strong className="text-warning-500">Avertissement :</strong> En cas de doute sur un diagnostic ou une
                réparation, il est recommandé de consulter un professionnel qualifié. L&apos;utilisateur est seul
                responsable de l&apos;utilisation qu&apos;il fait des informations présentes sur le site.
              </p>
              <p>
                L&apos;éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de
                l&apos;accès au site ou de l&apos;utilisation de son contenu.
              </p>
            </div>
          </section>

          {/* Liens externes */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Liens hypertextes</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Le site <strong className="text-white">OBD-Diagnostic.fr</strong> peut contenir des liens vers des sites
                externes (sites de vente d&apos;outils OBD2, forums, etc.). Ces liens sont proposés à titre informatif.
              </p>
              <p>
                L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites externes et décline toute responsabilité quant
                à leur contenu, leur disponibilité ou leurs pratiques.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. Données personnelles</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez
                consulter notre{' '}
                <Link
                  href="/politique-confidentialite"
                  className="text-mechanic-500 hover:text-mechanic-400 font-semibold"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="bg-carbon-900/50 border border-carbon-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">7. Droit applicable et juridiction</h2>
            <div className="space-y-4 text-carbon-200">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
                d&apos;accord amiable, le litige sera porté devant les tribunaux français compétents.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-mechanic-950 to-carbon-950 border border-mechanic-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <p className="text-carbon-200 mb-4">
              Pour toute question concernant les mentions légales, vous pouvez nous contacter via notre{' '}
              <Link href="/contact" className="text-mechanic-500 hover:text-mechanic-400 font-semibold">
                formulaire de contact
              </Link>
              .
            </p>
          </section>
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
