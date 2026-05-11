import { Music, Youtube, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <Link to="/" className="text-white group mb-12">
            <span className="font-display text-2xl font-black italic tracking-tighter">
              TRUMBOKEN
            </span>
          </Link>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@trumboken" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://www.facebook.com/trumboken" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              <Facebook size={20} />
            </a>
            <a href="mailto:info@chreator.se" className="hover:text-brand transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Navigering</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-white transition-colors">Hem</Link></li>
            <li><a href="/#aterforsaljare" className="hover:text-white transition-colors">Återförsäljare</a></li>
            <li><Link to="/kopvillkor" className="hover:text-white transition-colors">Köpvillkor</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 CHREATÖR. Alla rättigheter reserverade.</p>
      </div>
    </footer>
  );
}
