import { Music, Youtube, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-white group">
            <span className="font-display text-2xl font-black italic tracking-tighter">
              TRUMBOKEN
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Pedagogiska spelböcker för trumset, skapade av Christer Teglund. 
            Lär dig spela trummor från grunden med en beprövad metodik.
          </p>
          <div className="flex gap-4">
            <a href="https://youtube.com/@trumboken" className="hover:text-brand transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              <Facebook size={20} />
            </a>
            <a href="mailto:info@chreator.se" className="hover:text-brand transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Navigering</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Hem</Link></li>
            <li><Link to="/bocker" className="hover:text-white transition-colors">Spelböcker</Link></li>
            <li><Link to="/om-trumboken" className="hover:text-white transition-colors">Om serien</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Böcker</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/bocker/trumboken-1" className="hover:text-white transition-colors">Trumboken 1</Link></li>
            <li><Link to="/bocker/trumboken-2" className="hover:text-white transition-colors">Trumboken 2</Link></li>
            <li><Link to="/bocker/trumboken-3" className="hover:text-white transition-colors">Trumboken 3</Link></li>
            <li><Link to="/bocker/samlade-komp" className="hover:text-white transition-colors">Samlade komp</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Nyhetsbrev</h4>
          <p className="text-sm mb-4">Få tips och nyheter direkt i din mail.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Din e-post" 
              className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-brand"
            />
            <button className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-dark transition-colors">
              Ok
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Trumboken. Alla rättigheter reserverade. Skapad av Christer Teglund.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Integritetspolicy</a>
          <a href="#" className="hover:text-white">Köpvillkor</a>
        </div>
      </div>
    </footer>
  );
}
