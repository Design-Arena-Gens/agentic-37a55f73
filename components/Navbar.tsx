import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    ['Problem', '#problem'],
    ['Solution', '#solution'],
    ['How it works', '#how'],
    ['Models', '#models'],
    ['Use cases', '#use-cases'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq']
  ];

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="#" className="logo row">
          <Image src="/logo.svg" alt="Parallax AI" width={28} height={28} priority />
          <span>Parallax AI</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="muted">
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link className="btn ghost" href="#pricing">Pricing</Link>
          <Link className="btn" href="#cta">Start free</Link>
        </div>
      </div>
    </nav>
  );
}
