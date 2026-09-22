import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="header-brand-group">
          <Link href="/" className="brand-logo">
            <span className="brand-primary">NERO</span>
            <span className="brand-divider">/</span>
            <span className="brand-sub">TUYBA</span>
          </Link>
          <span className="badge-status">
            <span className="badge-dot" />
            Prototype
          </span>
        </div>

        <nav className="header-nav" aria-label="Main Navigation">
          <Link href="/" className="nav-item">Overview</Link>
          <Link href="/blog" className="nav-item">Articles</Link>
          <Link
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action"
          >
            CMS Studio ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
