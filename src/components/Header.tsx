import Link from "next/link";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          ⚡ NERO CMS <span>Prototype</span>
        </Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/blog">Articles</Link>
          <Link href="/admin" className="admin-link">CMS Admin ↗</Link>
        </nav>
      </div>
    </header>
  );
}
