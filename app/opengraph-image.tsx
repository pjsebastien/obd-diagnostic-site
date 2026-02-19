import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'OBD-Diagnostic.fr - Diagnostic automobile';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #376490, #2a4d6e)',
            marginBottom: 24,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>

        {/* Site name */}
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 16,
          }}
        >
          OBD-Diagnostic
          <span style={{ color: '#c0392b' }}>.fr</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: '#a0a0a0',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Diagnostic automobile simplifié - Codes OBD2, causes et solutions
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 40,
            padding: '16px 32px',
            borderRadius: 12,
            border: '1px solid #333',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>5000+</span>
            <span style={{ fontSize: 14, color: '#888' }}>Codes OBD</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>100%</span>
            <span style={{ fontSize: 14, color: '#888' }}>Gratuit</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>FR</span>
            <span style={{ fontSize: 14, color: '#888' }}>En français</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
