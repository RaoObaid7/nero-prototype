import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-colophon">
          <div className="footer-brand">
            <span className="brand-primary">NERO CMS</span>
            <span className="brand-sub">Platform Prototype</span>
          </div>
          <p className="footer-desc">
            A reusable publishing engine powering TUYBA — Islamic-compliant travel discovery, cultural guides, and editorial content.
          </p>
        </div>

        <div className="footer-meta-grid">
          <div className="footer-meta-col">
            <h4 className="footer-meta-title">Architecture</h4>
            <ul className="footer-meta-list">
              <li>Next.js 15 App Router</li>
              <li>Payload CMS v3</li>
              <li>PostgreSQL 16</li>
              <li>Schema.org JSON-LD</li>
            </ul>
          </div>

          <div className="footer-meta-col">
            <h4 className="footer-meta-title">Platform Scope</h4>
            <ul className="footer-meta-list">
              <li>8-Block Catalog</li>
              <li>Zero Draft Leakage</li>
              <li>Scheduled Publishing</li>
              <li>Token-Gated Preview</li>
            </ul>
          </div>

          <div className="footer-meta-col">
            <h4 className="footer-meta-title">Navigation</h4>
            <ul className="footer-meta-list">
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/blog">Articles</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap XML</a></li>
              <li><Link href="/admin" target="_blank" rel="noopener noreferrer">CMS Studio ↗</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NERO CMS / TUYBA Prototype. Built for local development.</p>
          <span className="footer-badge">Sprint 2 Verified</span>
        </div>
      </div>
    </footer>
  );
}
