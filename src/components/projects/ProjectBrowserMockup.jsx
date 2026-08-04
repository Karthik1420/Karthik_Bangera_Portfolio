// src/components/projects/ProjectBrowserMockup.jsx
// Renders a browser-frame-style project visual placeholder or image

export default function ProjectBrowserMockup({ project, flipped = false }) {
  const hasImage = project.coverImage;
  const accentColor = project.featured
    ? 'rgba(91,110,245,0.6)'
    : 'rgba(155,123,255,0.4)';

  return (
    <div
      className="relative w-full"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Ambient glow behind frame */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          inset: '-20px',
          background: `radial-gradient(ellipse at ${flipped ? 'left' : 'right'} center, ${accentColor} 0%, transparent 60%)`,
          filter: 'blur(40px)',
          opacity: 0.25,
          zIndex: 0,
        }}
      />

      {/* Browser frame */}
      <div
        className="relative browser-frame"
        style={{
          zIndex: 1,
          transform: `rotateY(${flipped ? '3' : '-3'}deg) rotateX(2deg)`,
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Browser bar */}
        <div className="browser-frame-bar">
          <div className="browser-dot" style={{ background: '#F87171' }} />
          <div className="browser-dot" style={{ background: '#FBBF24' }} />
          <div className="browser-dot" style={{ background: '#34D399' }} />
          <div className="browser-frame-url" style={{ marginLeft: '8px' }}>
            {project.liveUrl
              ? project.liveUrl.replace('https://', '')
              : `${project.slug}.dev`}
          </div>
        </div>

        {/* Content area */}
        <div
          style={{
            background: '#12121A',
            minHeight: '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {hasImage ? (
            <img
              src={project.coverImage}
              alt={`${project.title} — project screenshot`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.9)' }}
              loading="lazy"
            />
          ) : (
            /* Refined placeholder */
            <div
              style={{
                width: '100%',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '2rem',
              }}
            >
              {/* Placeholder UI skeleton */}
              <div style={{ width: '100%', maxWidth: '360px' }}>
                {/* Fake nav bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div style={{ width: '24px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
                  <div style={{ flex: 1 }} />
                  <div style={{ width: '48px', height: '8px', background: 'rgba(255,255,255,0.07)', borderRadius: '4px' }} />
                  <div style={{ width: '36px', height: '8px', background: 'rgba(255,255,255,0.07)', borderRadius: '4px' }} />
                </div>

                {/* Fake hero */}
                <div
                  style={{
                    padding: '20px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    marginBottom: '12px',
                  }}
                >
                  <div style={{ width: '60%', height: '12px', background: 'rgba(255,255,255,0.12)', borderRadius: '4px', marginBottom: '10px' }} />
                  <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '6px' }} />
                  <div style={{ width: '50%', height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '16px' }} />
                  <div
                    style={{
                      width: '80px',
                      height: '28px',
                      background: project.featured
                        ? 'linear-gradient(135deg, rgba(91,110,245,0.5), rgba(155,123,255,0.5))'
                        : 'rgba(255,255,255,0.08)',
                      borderRadius: '6px',
                    }}
                  />
                </div>

                {/* Fake content cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[1, 2].map((n) => (
                    <div
                      key={n}
                      style={{
                        height: '60px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.04)',
                        padding: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      <div style={{ width: '50%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }} />
                      <div style={{ width: '75%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Placeholder label */}
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6875rem',
                  color: '#3A3A4A',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                Screenshot pending
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
