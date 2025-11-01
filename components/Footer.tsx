import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="row">
            <Image src="/logo.svg" alt="Parallax AI" width={20} height={20} />
            <span className="muted">? {new Date().getFullYear()} Parallax AI</span>
          </div>
          <div className="row" style={{ gap: 16 }}>
            <Link className="muted" href="#">Privacy</Link>
            <Link className="muted" href="#">Terms</Link>
            <Link className="muted" href="#">Security</Link>
            <Link className="muted" href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
