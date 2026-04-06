export default function Footer() {
  return (
    <footer style={{ padding: '24px 32px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.18)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Kurupira Labs
        </p>
        <p style={{ fontSize: '12px', color: 'rgba(245,245,245,0.15)', letterSpacing: '0.05em' }}>
          Feito com ♥
        </p>
      </div>
    </footer>
  );
}
